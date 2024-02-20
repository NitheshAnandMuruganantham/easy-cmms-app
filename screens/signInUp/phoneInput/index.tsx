import React, { useRef, useState } from "react";
import { Keyboard, View } from "react-native";
import Toast from "react-native-root-toast";
import Logger from "../../../utils/logger";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Icon, Text } from "@rneui/themed";
import Phone from "react-native-phone-input";
import axios from "../../../utils/axios";
import style from "./style";

interface PhoneInputProps {
  navigation: StackNavigationProp<any, any>;
}

const log = new Logger("PhoneInput");
const PhoneInput: React.FunctionComponent<PhoneInputProps> = ({
  navigation,
}) => {
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, SetLoading] = useState(false);
  const phoneInput = useRef<Phone>(null);
  const phoneRef = useRef<Phone>(null);
  return (
    <View style={style.container}>
      <Text style={style.primaryText}>Phone</Text>
      <Text style={style.secondaryText}>Enter your phone number</Text>

      <Phone
        initialCountry="IN"
        initialValue="+91"
        flagStyle={{
          marginLeft: 10,
        }}
        onChangePhoneNumber={(value) => {
          setFormattedValue(value);
        }}
        style={{
          width: "95%",
          height: 50,
          borderWidth: 1,
          marginRight: "auto",
          marginLeft: "auto",
          borderColor: "#ccc",
          borderRadius: 5,
        }}
        autoFormat
        ref={phoneRef}
      />
      <Button
        containerStyle={{
          width: "30%",
          marginTop: 20,
          marginRight: 10,
          marginLeft: "auto",
        }}
        buttonStyle={{}}
        disabled={!phoneRef.current?.isValidNumber()}
        loading={loading}
        onPress={async () => {
          try {
            SetLoading(true);
            log.debug(`sending otp for phone number: ${formattedValue}`);
            const dt = await axios({
              method: "POST",
              url: `auth/phone/code/get`,
              data: {
                phone: formattedValue.replace(/\s/g, ""),
              },
            });
            log.debug(`sending otp for phone number: ${formattedValue}`);
            SetLoading(false);
            navigation.navigate("OtpInput", {
              ...dt.data,
              phone: formattedValue.replace(/\s/g, ""),
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
        <Icon name="arrow-right" size={30} color="white" />
      </Button>
    </View>
  );
};

export default PhoneInput;
