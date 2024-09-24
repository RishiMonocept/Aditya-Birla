import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function GenericButton({ title, onPress }) {
  return (
    <View style={{ paddingVertical: 10 }}>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#C7222A",
    borderRadius: 60,
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 32,
    // marginVertical: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.2,
    textAlign: "center",
  },
});
