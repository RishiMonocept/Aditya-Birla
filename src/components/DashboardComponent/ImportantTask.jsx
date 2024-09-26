import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { lineHeight } from "../../res/theme/fonts";
import { fontType } from "../../res/theme/fonts.js";

export default function ImportantTask() {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.ImportantTaskText}>ImportantTask</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 24,
    gap: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFF4D9",
    borderRadius: 12,
    opacity: 1,
  },
  ImportantTaskText: {
    fontSize: 25,
    lineHeight: lineHeight.lineHeight36,
    fontWeight: "600",
    color: "#000", // Text color
    textShadowColor: "#fff", // Border color
    textShadowRadius: 2, // Slight blur for smoother border

    // Additional shadows can be added for thicker border
    textShadowColor: "#fff",
    textShadowRadius: 2,
  },
});
