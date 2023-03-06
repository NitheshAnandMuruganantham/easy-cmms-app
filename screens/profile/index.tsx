import * as React from "react";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "@rneui/themed";

import Profile from "./profile";

const Stack = createStackNavigator();

interface SignUpProps {}

const ProfileSetUp: React.FunctionComponent<SignUpProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          return (
            <View style={{ height: 100, position: "relative" }}>
              <Button
                type="clear"
                containerStyle={{ position: "absolute", bottom: 0, left: 10 }}
                onPress={props.navigation.goBack}
              >
                <Ionicons name="arrow-back" size={30} />
              </Button>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileSetUp;
