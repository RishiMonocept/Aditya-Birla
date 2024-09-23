import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function UnitInput({
  placeholder,
  handelChange,
  value,
  unitText,
}) {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#979CAE"}
        value={value}
        onChange={handelChange}
      />
      <Text style={styles.text}>{unitText}</Text>
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
    justifyContent: "space-between",
  },
  text: {
    color: "#979CAE",
    gap: 10,
  },
});
