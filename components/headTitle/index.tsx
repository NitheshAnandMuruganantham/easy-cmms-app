import React, { FunctionComponent } from "react";
import { Image, StyleProp, Text, View, ViewStyle } from "react-native";

interface BodyHeadProps {
  style?: StyleProp<ViewStyle>;
  text1: string;
  text2: string;
  text3: string;
}

const BodyHead: FunctionComponent<BodyHeadProps> = (props) => {
  return (
    <View style={props.style}>
      <Text
        style={{
          fontFamily: "Poppins-Light",
          fontSize: 25,
          color: "#5F5F61",
        }}
      >
        {props.text1}
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Poppins-Black",
            color: "#5F5F61",
            fontSize: 25,
          }}
        >
          {props.text2}
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Black",
              fontSize: 25,
              color: "#2089dc",
            }}
          >
            {" "}
            {props.text3}
          </Text>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../../assets/images/extras/heading-highlight.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default BodyHead;
