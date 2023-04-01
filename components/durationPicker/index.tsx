import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

const DurationPicker: React.FunctionComponent<{
  value: number;
  label: string;
  setValue: (value: number) => void;
}> = ({ setValue, value, label }) => {
  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");
  useEffect(() => {
    let temp = 0;
    let m = parseInt(minute);
    let h = parseInt(hour);
    temp = h * 60;
    temp += m;
    setValue(temp);
  }, [hour, minute]);

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        borderColor: "#4f4b55",
        borderWidth: 1,
        width: "100%",
        marginTop: 20,
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: -10,
          left: 3,
          backgroundColor: "white",
        }}
      >
        {`${label} (h) (m)`}
      </Text>
      <TextInput
        style={{
          marginTop: 10,
          width: "60%",
        }}
        mode="flat"
        contextMenuHidden={true}
        keyboardType="numeric"
        placeholder="hours"
        onChangeText={(text) => {
          setHour(text);
        }}
        value={hour}
      />
      <TextInput
        style={{
          marginTop: 10,
          width: "38%",
        }}
        mode="flat"
        contextMenuHidden={true}
        keyboardType="numeric"
        placeholder="minutes"
        onChangeText={(text) => {
          setMinute(text);
        }}
        value={minute}
      />
    </View>
  );
};

export default DurationPicker;
