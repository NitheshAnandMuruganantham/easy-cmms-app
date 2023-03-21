import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent, useContext, useEffect } from "react";
import HomeHeader from "../../components/navigationHeaders/home";
import PastMaintenanceHome from "./home";

interface VenueProps {}

const Stack = createNativeStackNavigator();

const PastMaintenance: FunctionComponent<VenueProps> = () => {
  return (
    <Stack.Navigator initialRouteName="PastMaintenanceHome" screenOptions={{}}>
      <Stack.Screen
        name="PastMaintenanceHome"
        options={{
          header(props) {
            return <HomeHeader />;
          },
        }}
        component={PastMaintenanceHome}
      />
    </Stack.Navigator>
  );
};

export default PastMaintenance;
