import React, { FunctionComponent, useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { BottomSheet } from "@rneui/themed";
import { Button, TextInput } from "react-native-paper";
import Logger from "../../../utils/logger";
import Toast from "react-native-root-toast";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { useItemsDropDownQuery } from "../../../generated/generated";
import RefetchContext from "../../../context/refetchContext";
interface Props {
  isVisible: boolean;
  submit: (
    data: {
      id: number;
      quantity: number;
      label: string;
    }[]
  ) => void;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const RequestSpares: FunctionComponent<Props> = (props) => {
  const { data: SpareDropDown } = useItemsDropDownQuery();
  const [refetch, setRefetch] = useContext(RefetchContext);
  const [selectedSpare, setSelectedSpare] = useState<
    {
      id: number;
      quantity: number;
      label: string;
    }[]
  >([]);
  return (
    <BottomSheet
      onBackdropPress={() => props.setIsVisible(false)}
      isVisible={props.isVisible}
    >
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Spare Request
        </Text>
        <Formik
          validationSchema={yup.object().shape({
            item: yup.string().required("Required"),
            quantity: yup.number().min(1).required("Required"),
          })}
          initialValues={{
            item: undefined,
            quantity: 0,
          }}
          onSubmit={(values: any) => {
            setSelectedSpare([
              ...selectedSpare,
              {
                id: values.item,
                quantity: parseInt(`${values.quantity}`),
                label: SpareDropDown?.items.find(
                  (item) => item.id === values.item
                )?.code as string,
              },
            ]);
          }}
        >
          {({ values, setFieldValue, submitForm }) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#4f4b55",
                  borderRadius: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <Picker
                    selectedValue={values.item}
                    placeholder="Select Spare"
                    style={{
                      width: "68%",
                      color: "#4f4b55",
                      backgroundColor: "#e7e0ec",
                      textDecorationLine: "underline",
                    }}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("item", itemValue);
                    }}
                  >
                    {
                      <Picker.Item
                        label="Select Spare"
                        value={undefined}
                        key={undefined}
                      />
                    }
                    {SpareDropDown?.items
                      .filter((item) => {
                        return !selectedSpare.find((i) => i.id === item.id);
                      })
                      .map((item) => {
                        return (
                          <Picker.Item
                            label={`${item.id} (${item.code})`}
                            value={item.id}
                            key={item.id}
                          />
                        );
                      })}
                  </Picker>
                  <TextInput
                    onChangeText={(text) => {
                      setFieldValue("quantity", text);
                    }}
                    value={`${values.quantity}`}
                    keyboardType="numeric"
                    label={"Quantity"}
                    style={{
                      width: "30%",
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Button
                    onPress={() => {
                      submitForm();
                    }}
                    mode="contained-tonal"
                    style={{
                      marginTop: 20,
                    }}
                    icon={"plus"}
                  >
                    add
                  </Button>
                </View>
              </View>
            );
          }}
        </Formik>
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 10,
            height: 350,
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#4f4b55",
          }}
        >
          {selectedSpare?.length > 0 ? (
            selectedSpare.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderBottomWidth: 1,
                    borderBottomColor: "#4f4b55",
                    paddingBottom: 10,
                    paddingTop: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {item.quantity} NOS
                  </Text>
                  <Button
                    onPress={() => {
                      setSelectedSpare(
                        selectedSpare.filter((i) => i.id !== item.id)
                      );
                    }}
                  >
                    <AntDesign name="closecircle" size={20} color="black" />
                  </Button>
                </View>
              );
            })
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No Spare Selected
            </Text>
          )}
        </ScrollView>
        <Button
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            props.submit(selectedSpare);
          }}
          mode="contained"
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Submit Request
          </Text>
        </Button>
      </View>
    </BottomSheet>
  );
};

export default RequestSpares;
