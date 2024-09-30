import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OpenWonSubHeader({ label, value, color }) {
  return (
    <View style={[styles.mainContainer, { backgroundColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  label: {
    lineHeight: 17.6,
    fontSize: 16,
    fontWeight: "500",
    textAlignVertical: "center",
  },
  value: {
    lineHeight: 24.3,
    fontSize: 22,
    fontWeight: "700",
  },
});
