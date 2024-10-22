import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function GenericInput({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#979CAE"}
        value={value}
        onChangeText={onChangeText}
        keyboardType="visible-password"
        dataDetectorTypes={"calendarEvent"}
        // autoCapitalize={placeholder === "PAN Card Number" && "characters"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F1F3F6",
    // borderWidth: 1,
    borderRadius: 20,
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
