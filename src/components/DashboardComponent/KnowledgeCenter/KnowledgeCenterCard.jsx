import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";
import colors from "../../../res/theme/colors";
import { borderRadius, shadowOpacityElevation, spacing } from "../../../res/dimension";

export default function KnowledgeCenterCard({
  title,
  btnText,
  icon,
  imageIcon,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ borderRadius: 16, overflow: "hidden" }}>{imageIcon}</View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>{btnText}</Text>
          <TouchableOpacity style={styles.arrowKey}>{icon}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    gap: spacing.space_m3,
    paddingVertical:spacing.space_m1,
    paddingHorizontal: spacing.space_m1,
    borderWidth: 1,
    borderRadius: borderRadius.borderRadius16,
    backgroundColor: colors.primaryColors.white,
    borderColor: colors.lightNeutrals.lightGray,

    shadowColor: "#5680B31F",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: shadowOpacityElevation.opacity0_5,
    shadowRadius: borderRadius.borderRadius10,
    elevation: shadowOpacityElevation.elevation5,
  },
  titleContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  arrowKey: {
    height: spacing.space_m4,
    width: spacing.space_m4,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: fontSize.font14,
    lineHeight: lineHeight.lineHeight18,
    fontWeight: fontWeight.weight600,
  },
  btnText: {
    fontSize: fontSize.font14,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight24,
    color: colors.primaryColors.vibrantRed,
  },
});
