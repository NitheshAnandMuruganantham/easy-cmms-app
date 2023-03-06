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
  submit: (photo: string) => void;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const TakePic: FunctionComponent<Props> = (props) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <BottomSheet
      onBackdropPress={() => props.setIsVisible(false)}
      isVisible={props.isVisible}
    >
      <Formik
        initialValues={{}}
        onSubmit={async () => {
          let farmData = new FormData();
          const image = await cameraRef.current?.takePictureAsync();

          const x: any = {
            uri: image?.uri,
            name: "picture.jpg",
            type: "image/jpg",
          };

          farmData.append("file", x);
          const d = await axios.post("/upload", farmData);
          //   photos: d.data,
          props.submit(d.data);
          props.setIsVisible(false);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            {props.isVisible && !isSubmitting && (
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
                marginTop: 20,
                marginBottom: 20,
              }}
              style={{
                paddingTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
              title="submit"
            />
            <Spinner visible={isSubmitting} textContent={"Loading..."} />
          </View>
        )}
      </Formik>
    </BottomSheet>
  );
};

export default TakePic;
