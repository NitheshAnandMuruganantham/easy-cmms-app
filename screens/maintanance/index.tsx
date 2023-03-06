import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent, useContext, useEffect } from "react";
import HomeHeader from "../../components/navigationHeaders/home";
import MaintenanceHome from "./home";
import ViewMaintenance from "./viewMaintanance";

interface VenueProps {}

const Stack = createNativeStackNavigator();

const Maintenance: FunctionComponent<VenueProps> = () => {
  return (
    <Stack.Navigator initialRouteName="MaintenanceHome" screenOptions={{}}>
      <Stack.Screen
        name="MaintenanceHome"
        options={{
          header(props) {
            return <HomeHeader />;
          },
        }}
        component={MaintenanceHome}
      />
      <Stack.Screen name="ViewMaintenance" component={ViewMaintenance} />
    </Stack.Navigator>
  );
};

export default Maintenance;
