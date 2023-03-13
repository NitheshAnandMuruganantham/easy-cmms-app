import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Capture from "../../../components/capture";
import Logger from "../../../utils/logger";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from "react-native-root-toast";
interface Props {
  isVisible: boolean;
  submit: (photo: string) => void;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const CompleteMaintenance: FunctionComponent<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<any>();

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
        <Capture
          startCamera={props.isVisible}
          image={image}
          initilizeCamera={() => {
            setImage(null);
          }}
          captureImage={(image) => {
            setLoading(true);
            try {
              setImage(image);
              setLoading(false);
              props.submit(image);
            } catch (error) {
              log.error(error);
              setLoading(false);
              Toast.show("Error while uploading image", {
                position: Toast.positions.TOP,
                duration: Toast.durations.SHORT,
              });
            }
          }}
        />
      </View>
      <Spinner visible={loading} textContent={"Loading..."} />
    </BottomSheet>
  );
};

export default CompleteMaintenance;
