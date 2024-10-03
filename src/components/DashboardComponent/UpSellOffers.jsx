import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function UpSellOffers({ icon, description }) {
  return (
    <LinearGradient
      colors={["#FFDE32", "#FF7A00"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradientBorder}
    >
      <View style={styles.innerContainer}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 0.5,
    borderRadius: 10,
  },
  innerContainer: {
    gap: 8,
    borderRadius: 9,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#fff9e6",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  icon: {
    justifyContent: "center",
  },
  description: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
});
