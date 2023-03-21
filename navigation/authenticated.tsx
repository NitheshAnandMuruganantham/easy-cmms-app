import React, { useContext, useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MatDesignCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Tickets from "../screens/tickets";
import Maintenance from "../screens/maintanance";
import UserContext from "../context/userContext";
import Home from "../screens/home";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PastMaintenance from "../screens/pastMaintanance";
import InputProductionData from "../screens/production";

const Tab = createMaterialBottomTabNavigator();

function Authenticated() {
  const userData = useContext(UserContext);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    if (userData?.role) {
      SetLoading(false);
    }
  }, [userData]);

  return (
    <>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{
          fontFamily: "Poppins-Regular",
          color: "#FFF",
        }}
      />
      <Tab.Navigator activeColor="#2196f3">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={26} />
            ),
          }}
        />
        {userData?.role === "SUPERVISOR" && (
          <Tab.Screen
            name="tickets"
            component={Tickets}
            options={{
              tabBarLabel: "Tickets",
              tabBarIcon: ({ color }) => (
                <MatDesignCommunity name="ticket" color={color} size={26} />
              ),
            }}
          />
        )}
        {userData?.role === "FITTER" && (
          <Tab.Screen
            name="maintenance"
            component={Maintenance}
            options={{
              tabBarLabel: "Maintenance",
              tabBarIcon: ({ color }) => (
                <MatDesignCommunity name="wrench" color={color} size={26} />
              ),
            }}
          />
        )}
        {userData?.role === "FITTER" && (
          <Tab.Screen
            name="PastMaintenance"
            component={PastMaintenance}
            options={{
              tabBarLabel: "past work",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="history" size={26} color={color} />
              ),
            }}
          />
        )}
        {userData?.extra_roles &&
          userData?.extra_roles.indexOf("PRODUCTION_CONTROLLER") !== -1 && (
            <Tab.Screen
              name="InputProduction"
              component={InputProductionData}
              options={{
                tabBarLabel: "production",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="factory"
                    size={26}
                    color={color}
                  />
                ),
              }}
            />
          )}
      </Tab.Navigator>
    </>
  );
}

export default Authenticated;
