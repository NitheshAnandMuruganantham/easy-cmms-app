import * as React from "react";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "@rneui/themed";

import OtpInput from "./otpInput";
import PhoneInput from "./phoneInput";

const Stack = createStackNavigator();

interface SignUpProps {}

const SignUp: React.FunctionComponent<SignUpProps> = () => {
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
      <Stack.Screen name="PhoneInput" component={PhoneInput} />
      <Stack.Screen name="OtpInput" component={OtpInput} />
    </Stack.Navigator>
  );
};

export default SignUp;
