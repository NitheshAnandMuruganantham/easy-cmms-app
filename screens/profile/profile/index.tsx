import axios from "axios";
import React, { FunctionComponent, useContext, useState } from "react";
import { View } from "react-native";
import SuperTokens from "supertokens-react-native";

import { Picker } from "@react-native-picker/picker";
import { Button } from "@rneui/base";
import { Input, Text } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";

import DatePicker from "../../../components/dateTimePicker";
import style from "./style";
import { StackNavigationProp } from "@react-navigation/stack";

SuperTokens.addAxiosInterceptors(axios);

interface ProfileProps {
  navigation: StackNavigationProp<any>;
}

const Profile: FunctionComponent<ProfileProps> = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: "male",
        dob: new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
      }}
      onSubmit={async (dt) => {
        navigation.navigate("SportSelect", {
          birthday: `${dt.dob.getFullYear()}-${dt.dob.getMonth()}-${dt.dob.getDate()}`,
          email: dt.email,
          gender: dt.gender === "male" ? 1 : 2,
          name: dt.name,
        });
      }}
      validateOnChange
      validationSchema={() =>
        Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          dob: Yup.date().required(),
          gender: Yup.string().required(),
        })
      }
    >
      {({
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        values,
        setFieldValue,
        isValid,
        submitForm,
      }) => (
        <View style={style.container}>
          <Text style={style.primaryText}>Complete Your Profile</Text>
          <Text style={style.secondaryText}>Enter your personal details</Text>
          <Input
            placeholder="Name"
            errorMessage={errors.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            keyboardType="email-address"
            errorMessage={errors.email}
            placeholder="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
          />
          <DatePicker
            value={values.dob}
            maxDate={
              new Date(new Date().setFullYear(new Date().getFullYear() - 13))
            }
            setValue={(d) => {
              setFieldValue("dob", d);
            }}
          />
          <Picker
            style={{ width: "100%", fontFamily: "Poppins-Regular" }}
            selectedValue={values.gender}
            onBlur={handleBlur("gender")}
            onValueChange={(itemValue, itemIndex) =>
              setFieldValue("gender", itemValue)
            }
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
          <Button
            onPress={() => submitForm()}
            title="next"
            loading={isSubmitting}
            disabled={!isValid}
            containerStyle={{ width: "95%", borderRadius: 5, marginTop: 10 }}
          />
        </View>
      )}
    </Formik>
  );
};

export default Profile;
