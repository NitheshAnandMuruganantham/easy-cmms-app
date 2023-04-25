import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent, useContext, useEffect } from "react";
import HomeHeader from "../../components/navigationHeaders/home";
import ReplacementRequestsHome from "./home";

interface VenueProps {}

const Stack = createNativeStackNavigator();

const ReplacementRequests: FunctionComponent<VenueProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReplacementRequestsHome"
      screenOptions={{}}
    >
      <Stack.Screen
        name="ReplacementRequestsHome"
        options={{
          header(props) {
            return <HomeHeader />;
          },
        }}
        component={ReplacementRequestsHome}
      />
    </Stack.Navigator>
  );
};

export default ReplacementRequests;
