import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthContext from "../context/authContext";
import SignUp from "../screens/signInUp";
import { RootStackParamList } from "../types";
import Authenticated from "./authenticated";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const AuthState = React.useContext(AuthContext);
  let Component: React.FunctionComponent<any>;
  if (AuthState === "UNAUTHORISED" || AuthState === "SIGN_OUT") {
    Component = SignUp;
  } else {
    Component = Authenticated;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Component}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
