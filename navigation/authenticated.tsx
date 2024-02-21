import React, { useContext, useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MatDesignCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeVectorIcons from "react-native-vector-icons/FontAwesome";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Tickets from "../screens/tickets";
import Maintenance from "../screens/maintanance";
import UserContext from "../context/userContext";
import Home from "../screens/home";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PastMaintenance from "../screens/pastMaintanance";
import ReplacementRequests from "../screens/replacementRequests";

const Tab = createMaterialBottomTabNavigator();

function Authenticated() {
  const [userData] = useContext(UserContext);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    if (userData?.role) {
      SetLoading(false);
    }
    setTimeout(() => {
      SetLoading(false);
    }, 5000);
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
        {(userData?.role === "SUPERVISOR" ||
          (userData?.extra_roles &&
            userData?.extra_roles.indexOf("SUPERVISOR") !== -1)) && (
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
        {(userData?.role === "FITTER" ||
          userData?.extra_roles.indexOf("FITTER") !== 1) && (
          <Tab.Screen
            name="maintenance"
            component={Maintenance}
            options={{
              tabBarLabel: "Work",
              tabBarIcon: ({ color }) => (
                <MatDesignCommunity name="wrench" color={color} size={26} />
              ),
            }}
          />
        )}
        {(userData?.role === "FITTER" ||
          userData?.extra_roles.indexOf("FITTER") !== 1) && (
          <Tab.Screen
            name="replacementRequests"
            component={ReplacementRequests}
            options={{
              tabBarLabel: "Spares",
              tabBarIcon: ({ color }) => (
                <FontAwesomeVectorIcons name="gear" color={color} size={26} />
              ),
            }}
          />
        )}
        {(userData?.role === "FITTER" ||
          userData?.role === "MANAGER" ||
          userData?.role === "ADMIN") && (
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
      </Tab.Navigator>
    </>
  );
}

export default Authenticated;
