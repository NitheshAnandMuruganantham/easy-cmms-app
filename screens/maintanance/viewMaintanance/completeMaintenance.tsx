import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Capture from "../../../components/capture";
import Logger from "../../../utils/logger";
import Toast from "react-native-root-toast";
interface Props {
  isVisible: boolean;
  submit: (photo: string) => void;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const CompleteMaintenance: FunctionComponent<Props> = (props) => {
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
            try {
              setImage(image);
              props.submit(image);
            } catch (error) {
              log.error(error);
              Toast.show("Error while uploading image", {
                position: Toast.positions.TOP,
                duration: Toast.durations.SHORT,
              });
            }
          }}
        />
      </View>
    </BottomSheet>
  );
};

export default CompleteMaintenance;
