import { checkProfileStatus } from "./utils/auth";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SuperTokens from "supertokens-react-native";
import { RootSiblingParent } from "react-native-root-siblings";

import { Text, Image, ThemeProvider } from "@rneui/themed";
import network from "./constants/network";
import Theme from "./constants/theme";
import AuthContext from "./context/authContext";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo";
import { View } from "react-native";
import UserContext from "./context/userContext";
import RefetchContext from "./context/refetchContext";

SuperTokens.addAxiosInterceptors(axios);

export default function App() {
  const [authStatus, SetAuthStatus] = React.useState<
    | "LOADING"
    | "SIGN_OUT"
    | "UNAUTHORISED"
    | "SESSION_CREATED"
    | "SIGN_OUT"
    | "PROFILE_INCOMPLETE"
    | "REFRESH_SESSION"
  >("LOADING");
  const [userData, SetUserData] = React.useState<any>(null);
  SuperTokens.init({
    apiDomain: network.server,
    apiBasePath: "/auth",
    autoAddCredentials: true,
    onHandleEvent: async (context) => {
      if (context.action === "SESSION_CREATED") {
        const status = await checkProfileStatus(axios, SetUserData);
        SetAuthStatus(status);
      } else {
        SetAuthStatus(context.action);
      }
    },
  });

  useEffect(() => {
    const CheckLoggedIn = async () => {
      const loggedIn = await SuperTokens.doesSessionExist();
      if (loggedIn) {
        const status = await checkProfileStatus(axios, SetUserData);
        SetAuthStatus(status);
      } else {
        SetAuthStatus("UNAUTHORISED");
      }
    };
    CheckLoggedIn();
  }, []);

  const isLoadingComplete = useCachedResources();
  const [refetch, setRefetch] = React.useState(false);
  if (!isLoadingComplete || authStatus === "LOADING") {
    return (
      <SafeAreaView>
        <Image
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1,
          }}
          source={require("./assets/images/splash.png")}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
          <RootSiblingParent>
            <AuthContext.Provider value={authStatus}>
              <UserContext.Provider value={userData}>
                <RefetchContext.Provider value={[refetch, setRefetch]}>
                  <SafeAreaProvider>
                    <Navigation />
                    <StatusBar />
                  </SafeAreaProvider>
                </RefetchContext.Provider>
              </UserContext.Provider>
            </AuthContext.Provider>
          </RootSiblingParent>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
