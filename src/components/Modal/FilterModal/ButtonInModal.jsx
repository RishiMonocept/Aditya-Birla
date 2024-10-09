import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { borderRadius, spacingModerateScale } from "../../../res/dimension";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";

export default function ButtonInModal({
  title,
  onPress,
  isActive,
  activeColors,
  inactiveColors,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: isActive
            ? activeColors.background
            : inactiveColors.background,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.titleText,
          {
            color: isActive ? activeColors.text : inactiveColors.text,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: spacingModerateScale.space_m1,
    paddingVertical: spacingModerateScale.space_base,
    borderRadius: borderRadius.borderRadius8,
    alignItems: "center", // Ensure the text is centered
    width: "48%",
  },
  titleText: {
    fontSize: fontSize.font13,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight16,
  },
});
