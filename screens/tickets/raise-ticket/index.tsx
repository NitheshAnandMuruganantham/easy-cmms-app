import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { BottomSheet, Button, Input, ListItem } from "@rneui/themed";
import { Camera, CameraType } from "expo-camera";
import { Formik } from "formik";
import Picker from "react-native-picker-select";
import axios from "../../../utils/axios";
import client from "../../../utils/apollo";
import {
  Ticket_Status,
  useCreateTicketsMutation,
  useGetAllMachinesDropdownQuery,
} from "../../../generated/generated";
import Logger from "../../../utils/logger";
import Spinner from "react-native-loading-spinner-overlay/lib";
interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const RaiseTicket: FunctionComponent<Props> = (props) => {
  const [type, setType] = useState(CameraType.back);
  const { data: machines, loading } = useGetAllMachinesDropdownQuery();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);

  const [
    createTicket,
    { data: createTicketData, error, loading: CreateTicketsLoading },
  ] = useCreateTicketsMutation();

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <BottomSheet
      onBackdropPress={() => props.setIsVisible(false)}
      isVisible={props.isVisible}
    >
      <Formik
        initialValues={{
          title: "",
          machine: "",
          description: "",
        }}
        onSubmit={async (values) => {
          let farmData = new FormData();
          const image = await cameraRef.current?.takePictureAsync();

          const x: any = {
            uri: image?.uri,
            name: "picture.jpg",
            type: "image/jpg",
          };

          farmData.append("file", x);
          const d = await axios.post("/upload", farmData);
          await createTicket({
            variables: {
              createTicketInput: {
                machines: {
                  connect: {
                    id: values.machine,
                  },
                },
                name: values.title,
                description: values.description,
                photos: d.data,
                status: Ticket_Status.Open,
              },
            },
          });
          client.refetchQueries({
            include: ["Tickets"],
          });
          props.setIsVisible(false);
        }}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm,
          values,
          errors,
          setFieldValue,
        }) => (
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <Spinner
              visible={CreateTicketsLoading || isSubmitting}
              textContent={"Loading..."}
            />

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Raise Ticket
            </Text>
            <Input
              errorMessage={errors.title}
              placeholder="title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            <Input
              errorMessage={errors.description}
              placeholder="description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            <Picker
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  borderColor: "gray",
                  width: "95%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 10,
                  color: "black",
                  paddingRight: 30,
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  borderColor: "gray",
                  width: "95%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 10,
                  color: "black",
                  paddingRight: 30,
                },
              }}
              onValueChange={(itemValue) => setFieldValue("machine", itemValue)}
              items={machines?.machines || []}
            />
            {props.isVisible && (
              <Camera
                ratio={"1:1"}
                ref={cameraRef}
                style={{
                  marginTop: 50,
                  height: 250,
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 20,
                  overflow: "hidden",
                  aspectRatio: 1,
                }}
                type={type}
              />
            )}
            <Button
              onPress={() => submitForm()}
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 20,
                marginTop: 5,
                marginBottom: 20,
              }}
              style={{
                paddingTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
              }}
              title="Raise Ticket"
            />
          </View>
        )}
      </Formik>
    </BottomSheet>
  );
};

export default RaiseTicket;
