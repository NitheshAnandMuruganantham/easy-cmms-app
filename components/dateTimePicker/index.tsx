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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const inputRef = useRef<any>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    props.setValue(date);
    hideDatePicker();
  };

  return (
    <View>
      <TextInput
        style={{
          marginTop: 10,
        }}
        ref={inputRef}
        showSoftInputOnFocus={false}
        onPressIn={() => {
          showDatePicker();
        }}
        value={new Date(props.value).toLocaleDateString() || "select a date"}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => hideDatePicker()}
      />
    </View>
  );
};

export default DatePicker;
