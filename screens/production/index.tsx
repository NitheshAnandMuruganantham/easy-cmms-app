import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import axios from "../../utils/axios";
import toast from "react-native-root-toast";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from "react-native-root-toast";
import * as yup from "yup";
import Constants from "expo-constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import RefetchContext from "../../context/refetchContext";
import { Button } from "@rneui/themed";
import HomeHeader from "../../components/navigationHeaders/home";
import BodyHead from "../../components/headTitle";
interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export default function InputProductionData() {
  const [showDate, setShowDate] = React.useState(false);
  const [refresh, setRefresh] = useContext(RefetchContext);
  const [date, setDate] = React.useState(new Date());
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <HomeHeader />

      <Formik
        initialValues={{
          shift: undefined,
          total_run_time: "",
          total_run_time_minutes: "0",
          total_down_time: "",
          total_down_time_minutes: "0",
          target_production: "",
          actual_production: "",
        }}
        validationSchema={yup.object().shape({
          total_run_time: yup.number().required(),
          total_run_time_minutes: yup.number().required(),
          total_down_time_minutes: yup.number().required(),
          total_down_time: yup.number().required(),
          target_production: yup.number().required(),
          actual_production: yup.number().required(),
          shift: yup.string().required(),
        })}
        onSubmit={async (values, { resetForm }) => {
          axios
            .post("punchProduction", {
              shift: values.shift,
              total_run_time:
                parseInt(values.total_run_time) * 60 +
                parseInt(values.total_run_time_minutes),
              total_down_time:
                parseInt(values.total_down_time) * 60 +
                parseInt(values.total_down_time_minutes),
              target_production: parseInt(
                `${parseFloat(values.target_production) * 1000}`
              ),
              actual_production: parseInt(
                `${parseFloat(values.actual_production) * 1000}`
              ),
            })
            .then((res) => {
              if (res?.data) {
                Toast.show("production raised successfully", {
                  position: Toast.positions.TOP + 50,
                  duration: Toast.durations.SHORT,
                });
                resetForm();
              }
            })
            .catch((e) => {
              toast.show("Something went wrong", {
                position: toast.positions.TOP + 50,
              });
            });
          setRefresh((prev) => !prev);
        }}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm,
          isValid,
          values,
          errors,
          setFieldValue,
        }) => (
          <View
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <BodyHead
              text1="Input"
              text2="Production"
              text3="Data"
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            />

            <Spinner visible={isSubmitting} textContent={"Loading..."} />

            <Picker
              selectedValue={values.shift}
              onValueChange={(itemValue) => {
                setFieldValue("shift", itemValue);
              }}
            >
              <Picker.Item label="Select Shift" value={undefined} />
              <Picker.Item label="Shift 1" value="A" />
              <Picker.Item label="Shift 2" value="B" />
              <Picker.Item label="Shift 3" value="C" />
            </Picker>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  width: "60%",
                }}
                mode="outlined"
                keyboardType="numeric"
                placeholder="total run time (h)"
                onChangeText={(text) => {
                  setFieldValue("total_run_time", text);
                }}
                onBlur={handleBlur("total_run_time")}
                value={`${values.total_run_time}`}
              />

              <TextInput
                style={{
                  width: "38%",
                }}
                mode="outlined"
                keyboardType="numeric"
                placeholder="run time minutes"
                onChangeText={(text) => {
                  setFieldValue("total_run_time_minutes", text);
                }}
                onBlur={handleBlur("total_run_time_minutes")}
                value={`${values.total_run_time_minutes}`}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  width: "60%",
                }}
                mode="outlined"
                keyboardType="numeric"
                placeholder="total down time (h)"
                onChangeText={(text) => {
                  setFieldValue("total_down_time", text);
                }}
                onBlur={handleBlur("total_down_time")}
                value={`${values.total_down_time}`}
              />
              <TextInput
                style={{
                  width: "38%",
                }}
                mode="outlined"
                keyboardType="numeric"
                placeholder="total down time minutes"
                onChangeText={(text) => {
                  setFieldValue("total_down_time_minutes", text);
                }}
                onBlur={handleBlur("total_down_time_minutes")}
                value={`${values.total_down_time_minutes}`}
              />
            </View>
            <TextInput
              keyboardType="numeric"
              mode="outlined"
              placeholder="actual production"
              onChangeText={(text) => {
                setFieldValue("actual_production", text);
              }}
              onBlur={handleBlur("actual_production")}
              value={`${values.actual_production}`}
            />
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              placeholder="target production"
              onChangeText={(text) => {
                setFieldValue("target_production", text);
              }}
              onBlur={handleBlur("target_production")}
              value={`${values.target_production}`}
            />

            <Button
              disabled={isSubmitting || !isValid}
              onPress={() => submitForm()}
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 20,
                marginTop: 20,
                marginBottom: 20,
              }}
              style={{
                paddingTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
              }}
              title="Send Data"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
