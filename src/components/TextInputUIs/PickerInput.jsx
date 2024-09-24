import { StyleSheet, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function PickerInput({
  label,
  selectedValue,
  onValueChange,
  options,
}) {
  return (
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={selectedValue}
        dropdownIconRippleColor={"#ccc"}
        onValueChange={onValueChange}
        style={styles.picker}
        mode="dropdown"
      >
        {/* Corrected the case of Picker.Item */}
        <Picker.Item
          key={label}
          label={label}
          value={label}
          enabled={false}
          color={"#979CAE"}
        />
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.name}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerWrapper: {
    overflow: "hidden",
    borderRadius: 20,
  },
  picker: {
    backgroundColor: "#f1f3f6",
  },
});
