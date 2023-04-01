import React, { useRef, useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-paper";

interface DatePickerProps {
  value: number;
  setValue: (date: Date) => void;
  maxDate?: Date;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const inputRef = useRef<any>(null);
  return (
    <View>
      <TextInput
        style={{
          marginTop: 10,
        }}
        ref={inputRef}
        showSoftInputOnFocus={false}
        onPressIn={() => {
          setVisible(true);
        }}
        value={
          (typeof props.value === "number"
            ? new Date(props.value * 1000).toLocaleDateString()
            : new Date(props.value).toLocaleDateString()) || "select a date"
        }
      />
      <DateTimePickerModal
        isVisible={isVisible}
        onConfirm={(date) => {
          setVisible(false);
          inputRef?.current?.blur();
          console.log("date component", date, "date type", typeof date);
          props.setValue(date);
        }}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
};

export default DatePicker;
