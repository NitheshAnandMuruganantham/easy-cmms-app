import React, { useContext, useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwsDesign from "react-native-vector-icons/FontAwesome";
import MatDesignCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tickets from "../screens/tickets";
import Maintenance from "../screens/maintanance";
import UserContext from "../context/userContext";
import Home from "../screens/home";
import HomeHeader from "../components/navigationHeaders/home";
import Spinner from "react-native-loading-spinner-overlay/lib";
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={{
          unmountOnBlur: true,
          header: () => {
            return <HomeHeader />;
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return <AntDesign color={color} size={size} name="home" />;
            },
          }}
          component={Home}
        />
        {userData?.role === "SUPERVISOR" && (
          <Tab.Screen
            name="tickets"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => {
                return <AntDesign color={color} size={size} name="find" />;
              },
            }}
            component={Tickets}
          />
        )}
        {userData?.role === "FITTER" && (
          <Tab.Screen
            name="maintenance"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <MatDesignCommunity
                    color={color}
                    size={size + 2}
                    name="wrench"
                  />
                );
              },
            }}
            component={Maintenance}
          />
        )}
      </Tab.Navigator>
    </>
  );
}

export default Authenticated;
