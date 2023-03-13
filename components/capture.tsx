import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { ImageType } from "expo-camera/build/Camera.types";
let camera: Camera;
const Capture: FunctionComponent<{
  captureImage: (image: any) => void;
  startCamera: boolean;
  initilizeCamera: () => void;
  image: any;
}> = (props) => {
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [cameraType, setCameraType] = React.useState(CameraType.back);
  const [flashMode, setFlashMode] = React.useState<FlashMode>(FlashMode.off);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    props.initilizeCamera();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  useEffect(() => {
    __startCamera();
  }, [props.startCamera === true]);

  const __takePicture = async () => {
    const photo = await camera.takePictureAsync({
      base64: true,
      quality: 0.1,
      scale: 0.1,
      skipProcessing: true,
      imageType: ImageType.png,
    });
    setPreviewVisible(true);
    props.captureImage(`data:image/png;base64,${photo.base64}`);
  };

  return (
    <View style={styles.container}>
      {startCamera && (
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          {previewVisible && props.image ? (
            <CameraPreview photo={props.image} />
          ) : (
            <Camera
              type={cameraType}
              ratio="1:1"
              flashMode={flashMode}
              style={{ flex: 1 }}
              ref={(r) => {
                camera = r as any;
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "transparent",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: "5%",
                    top: "10%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                    flex: 1,
                    width: "100%",
                    padding: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        width: 50,
                        height: 50,
                        bottom: 20,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    overflow: "hidden",
    aspectRatio: 1,
  },
});

const CameraPreview: FunctionComponent<{
  photo: any;
}> = ({ photo }) => {
  return (
    <Image
      source={{ uri: photo }}
      style={{
        height: 250,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 20,
        overflow: "hidden",
        aspectRatio: 1,
      }}
    />
  );
};

export default Capture;
