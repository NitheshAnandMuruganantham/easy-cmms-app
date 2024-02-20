import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider as PaperProvider } from "react-native-paper";
import { Image } from "@rneui/themed";
import AuthContext from "./context/authContext";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo";
import UserContext from "./context/userContext";
import RefetchContext from "./context/refetchContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatusBar from "./components/statusBar";

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

  useEffect(() => {
    const CheckLoggedIn = async () => {
      const acc = await AsyncStorage.getItem("accessToken");
      const ref = await AsyncStorage.getItem("refreshToken");
      const profile = (await AsyncStorage.getItem("profile")) || "{}";
      if (acc && ref) {
        SetAuthStatus("SESSION_CREATED");
        SetUserData(JSON.parse(profile));
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
        <PaperProvider>
          <RootSiblingParent>
            <AuthContext.Provider value={[authStatus, SetAuthStatus]}>
              <UserContext.Provider value={[userData, SetUserData]}>
                <RefetchContext.Provider value={[refetch, setRefetch]}>
                  <StatusBar />
                  <Navigation />
                </RefetchContext.Provider>
              </UserContext.Provider>
            </AuthContext.Provider>
          </RootSiblingParent>
        </PaperProvider>
      </ApolloProvider>
    );
  }
}
