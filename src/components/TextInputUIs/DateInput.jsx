import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import CALENDAR_ICON from "../../assets/Forms/calendar-icon.png";

export default function DateInput({ placeholder, onChangeText, value }) {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(false);
    setDate(currentDate);
    onChangeText(format(currentDate, "yyyy-MM-dd")); // Format as needed
  };
  value = format(date, "yyyy-MM-dd");

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#979CAE"}
        value={value}
        onChangeText={onChangeText}
        editable={false}
        style={{ color: "#000" }}
      />
      <TouchableOpacity
        style={{ padding: 4 }}
        onPress={() => setShowCalendar(true)}
      >
        <Image source={CALENDAR_ICON} style={styles.icon} />
      </TouchableOpacity>
      {showCalendar && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F1F3F6",
    borderRadius: 20,
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 18,
    height: 20,
  },
});
