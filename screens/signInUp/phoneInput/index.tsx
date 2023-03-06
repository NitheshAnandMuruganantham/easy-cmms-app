import React, { useRef, useState } from "react";
import { Keyboard, View } from "react-native";
import Phone from "react-native-phone-number-input";
import Toast from "react-native-root-toast";
import Logger from "../../../utils/logger";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Icon, Text } from "@rneui/themed";

import axios from "../../../utils/axios";
import style from "./style";

interface PhoneInputProps {
  navigation: StackNavigationProp<any, any>;
}

const log = new Logger("PhoneInput");
const PhoneInput: React.FunctionComponent<PhoneInputProps> = ({
  navigation,
}) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, SetLoading] = useState(false);
  const phoneInput = useRef<Phone>(null);

  return (
    <View style={style.container}>
      <Text style={style.primaryText}>Phone</Text>
      <Text style={style.secondaryText}>Enter your phone number</Text>
      <Phone
        containerStyle={style.input}
        defaultValue={value}
        ref={phoneInput}
        disabled={loading}
        defaultCode="IN"
        layout="second"
        onChangeText={(text) => {
          setValid(phoneInput.current?.isValidNumber(text) || false);
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        autoFocus
        withShadow
      />
      <Button
        style={style.button}
        disabled={!valid}
        loading={loading}
        onPress={async () => {
          try {
            SetLoading(true);
            log.debug(`sending otp for phone number: ${formattedValue}`);
            const dt = await axios({
              method: "POST",
              url: `/auth/signinup/code`,
              data: {
                phoneNumber: formattedValue,
              },
              headers: {
                rid: "passwordless",
                "Content-Type": "application/json",
              },
            });
            log.debug(`sending otp for phone number: ${formattedValue}`);
            SetLoading(false);
            navigation.navigate("OtpInput", {
              ...dt.data,
            });
          } catch (e) {
            log.error(`sending otp for phone number: ${e}`);
            SetLoading(false);
            Toast.show("some thing went wrong", {
              duration: Toast.durations.SHORT,
              position: 80,
              textStyle: {
                fontFamily: "Poppins-Light",
              },
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
            });
          }
        }}
        type="solid"
      >
        Next
        <Icon name="arrow-right" color="white" />
      </Button>
    </View>
  );
};

export default PhoneInput;
