import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function GenericInput({ placeholder, onChangeText, value }) {
  const handleTextChange = (text) => {
    if (placeholder === "PAN Card Number") {
      onChangeText(text.toUpperCase().slice(0, 10));
    } else if (placeholder === "Age") {
      const numericText = text.replace(/[^0-9]/g, "");
      onChangeText(numericText.slice(0, 3));
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#979CAE"}
        value={value}
        onChangeText={handleTextChange}
        keyboardType={
          placeholder === "PAN Card Number"
            ? "default"
            : placeholder === "Age"
            ? "numeric"
            : "visible-password"
        }
        autoCapitalize={
          placeholder === "PAN Card Number" ? "characters" : "none"
        }
        maxLength={
          placeholder === "PAN Card Number"
            ? 10
            : placeholder === "Age"
            ? 3
            : undefined
        }
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
