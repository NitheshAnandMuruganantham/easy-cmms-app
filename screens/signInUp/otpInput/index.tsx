import * as React from "react";
import { View } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@rneui/themed";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import axios from "../../../utils/axios";
import style from "./style";
import Toast from "react-native-root-toast";
import SuperTokens from "supertokens-react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";

interface OtpInputProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any>;
}

const OtpInput: React.FunctionComponent<OtpInputProps> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={style.container}>
      <Text style={style.primaryText}>Enter The Otp</Text>
      <Text style={style.secondaryText}>Enter the OTP send to your phone</Text>
      <View style={style.inputContainer}>
        <OTPInputView
          onCodeFilled={async (otp) => {
            try {
              setLoading(true);
              const authResponse = await axios.post(
                `/auth/signinup/code/consume`,
                {
                  deviceId: route.params?.deviceId,
                  preAuthSessionId: route.params?.preAuthSessionId,
                  userInputCode: otp,
                }
              );
              console.log(authResponse.data);
              console.info("successfully logged in");
              setLoading(false);
            } catch (e) {
              setLoading(false);
              console.error(e);
              Toast.show("Invalid OTP", {
                position: Toast.positions.TOP,
                duration: Toast.durations.SHORT,
              });
            }
          }}
          autoFocusOnLoad={true}
          pinCount={6}
          codeInputFieldStyle={style.input}
        />
      </View>
      <Spinner visible={loading} textContent="authenticating....." />
    </View>
  );
};

export default OtpInput;
