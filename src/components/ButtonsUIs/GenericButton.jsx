import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function GenericButton({
  title,
  onPress,
  backgroundColor = "#C7222A",
  textColor = "#ffffff",
}) {
  return (
    <View style={{ paddingVertical: 10 }}>
      <TouchableOpacity
        style={[styles.mainContainer, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 60,
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 32,
    // marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.2,
    textAlign: "center",
  },
});
