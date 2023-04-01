import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import axios from "../../utils/axios";
import { buildYup } from "schema-to-yup";
import toast from "react-native-root-toast";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from "react-native-root-toast";
import { Button } from "@rneui/themed";
import HomeHeader from "../../components/navigationHeaders/home";
import BodyHead from "../../components/headTitle";
import DatePicker from "../../components/dateTimePicker";
import DurationPicker from "../../components/durationPicker";

const ProductionInput = () => {
  const [DialogLoading, SetLoading] = useState(true);
  const [ServerSchema, SetSchema] = useState({});

  useEffect(() => {
    SetLoading(true);
    axios
      .get("getBlockSettings")
      .then(({ data }) => {
        console.log("BEFORE BLOCK SETTINGS", data?.PRODUCTION_INPUT_FORM);
        SetSchema(data?.PRODUCTION_INPUT_FORM);
        console.log("BLOCK SETTINGS", ServerSchema);
        SetLoading(false);
      })
      .catch(() => {
        toast.show("something went wrong...", {
          duration: toast.durations.SHORT,
          position: toast.positions.TOP,
        });
        SetLoading(false);
      });
  }, []);

  useEffect(() => {}, []);

  if (DialogLoading) {
    return <Spinner visible={DialogLoading} textContent="fetching form" />;
  } else {
    if (ServerSchema) {
      return <InputProductionData schema={ServerSchema} />;
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Something went wrong</Text>
        </View>
      );
    }
  }
};

const InputProductionData: React.FunctionComponent<{
  schema: any;
}> = ({ schema }) => {
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <HomeHeader />

      <Formik
        initialValues={schema.initial_value}
        validationSchema={buildYup(
          schema.validation_schema.schema,
          schema.validation_schema.config
        )}
        onSubmit={async (values, { resetForm }) => {
          let parsedValues = JSON.parse(JSON.stringify(values));
          if (
            parsedValues.shift !== "A" &&
            parsedValues.shift !== "B" &&
            parsedValues.shift !== "C"
          ) {
            toast.show("Invalid shift", {
              position: toast.positions.TOP + 50,
            });
            return;
          }
          console.log("values", values);
          let from = new Date(values.date * 1000).toISOString();
          console.log("from", from);
          await axios
            .post("punchProduction", {
              shift: values.shift,
              date: from,
              data: parsedValues,
            })
            .then((res) => {
              console.log(res);
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
        }}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm,
          resetForm,
          handleReset,
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
            <Spinner visible={isSubmitting} textContent={"Loading..."} />
            <BodyHead
              text1="Input"
              text2="Production"
              text3="Data"
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            />
            {schema.form.map((item, index) => {
              switch (item.type) {
                case "text":
                  return (
                    <TextInput
                      label={item.label}
                      value={values[item.field]}
                      style={{
                        marginTop: 10,
                      }}
                      onChangeText={handleChange(item.field) as any}
                      onBlur={handleBlur(item.field) as any}
                      key={index}
                    />
                  );
                case "duration":
                  return (
                    <DurationPicker
                      label={item.label}
                      setValue={(v) => {
                        setFieldValue(item.field, v);
                      }}
                      value={values[item.field]}
                      key={index}
                    />
                  );
                case "date":
                  return (
                    <DatePicker
                      key={index}
                      value={values[item.field]}
                      setValue={(d) => setFieldValue(item.field, d)}
                    />
                  );
                case "number":
                  return (
                    <TextInput
                      label={item.label}
                      value={values[item.field]}
                      style={{
                        marginTop: 10,
                      }}
                      onChangeText={handleChange(item.field) as any}
                      onBlur={handleBlur(item.field) as any}
                      key={index}
                      keyboardType="numeric"
                    />
                  );
                case "select":
                  return (
                    <View
                      style={{
                        marginTop: 10,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        backgroundColor: "#e7e0ec",
                      }}
                      key={index}
                    >
                      <Picker
                        style={{
                          color: "#4f4b55",
                          backgroundColor: "#e7e0ec",
                          textDecorationLine: "underline",
                        }}
                        onValueChange={(value) => {
                          setFieldValue(item.field, value);
                        }}
                        selectedValue={values[item.field]}
                        key={index}
                      >
                        {item.options &&
                          item.options.map((option, index) => {
                            return (
                              <Picker.Item
                                label={option.label}
                                value={option.value}
                                key={index}
                              />
                            );
                          })}
                      </Picker>
                    </View>
                  );
              }
            })}
            <Button
              disabled={!isValid}
              buttonStyle={{}}
              containerStyle={{
                marginTop: 20,
                marginBottom: 30,
              }}
              type="solid"
              onPress={() => submitForm()}
            >
              submit
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ProductionInput;
