import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { borderRadius, spacing } from "../../../res/dimension";
import colors from "../../../res/theme/colors";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";

export default function ActionButton({ icon, title }) {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnContainer: {
    padding: spacing.space_10,
    borderRadius: borderRadius.borderRadius8,
    gap: spacing.space_m5,
    backgroundColor: colors.primaryColors.white,
    flexDirection: "row",
  },
  icon: {
    width: spacing.space_22,
    height: spacing.space_22,
    borderRadius: borderRadius.borderRadius5_5,
  },
  title: {
    fontSize: fontSize.font14,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight15dot4,
    color: "#00000099",
  },
});
