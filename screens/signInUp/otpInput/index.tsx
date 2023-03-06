import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@rneui/themed";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import axios from "../../../utils/axios";
import style from "./style";
import Toast from "react-native-root-toast";
import SuperTokens from "supertokens-react-native";

interface OtpInputProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any>;
}

const OtpInput: React.FunctionComponent<OtpInputProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.primaryText}>Enter The Otp</Text>
      <Text style={style.secondaryText}>Enter the OTP send to your phone</Text>
      <View style={style.inputContainer}>
        <OTPInputView
          onCodeFilled={async (otp) => {
            try {
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

              const resp = await axios.get(`/me/profile/status`);
              console.info("profile check response ", resp.data);
              if (
                resp?.data?.role !== "FITTER" &&
                resp?.data?.role !== "SUPERVISOR"
              ) {
                alert(
                  "you are not authorized to access mobile app use the web dashboard for operations"
                );
                SuperTokens.signOut();
              }
              console.info("successfully fetched profile status");
            } catch (e) {
              console.error(e);
              Toast.show("Some thing went wrong try again", {
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
      {/* <TouchableOpacity>
        <Text style={style.resend}>resend</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default OtpInput;
