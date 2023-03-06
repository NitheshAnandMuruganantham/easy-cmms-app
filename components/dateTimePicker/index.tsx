import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Input } from "@rneui/themed";

interface DatePickerProps {
  value: Date;
  setValue: (date: Date) => void;
  maxDate?: Date;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={{ display: "flex", width: "100%" }}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Input
          leftIcon={{
            name: "birthday-cake",
            type: "font-awesome",
          }}
          value={props.value.toLocaleDateString()}
          editable={false}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        maximumDate={props.maxDate}
        isVisible={isVisible}
        onConfirm={(date) => {
          setVisible(false);
          props.setValue(new Date(date));
        }}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
};

export default DatePicker;
