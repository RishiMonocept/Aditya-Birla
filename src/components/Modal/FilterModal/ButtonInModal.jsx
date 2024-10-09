import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { borderRadius, spacingModerateScale } from "../../../res/dimension";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";

export default function ButtonInModal({
  title,
  onPress,
  activeColors,
  inactiveColors,
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: isPressed
            ? activeColors.background
            : inactiveColors.background,
        },
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)} // Change color on press in
      onPressOut={() => setIsPressed(false)} // Revert color on press out
    >
      <Text
        style={[
          styles.titleText,
          {
            color: isPressed ? activeColors.text : inactiveColors.text,
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
    alignItems: "center",
    width: "48%",
  },
  titleText: {
    fontSize: fontSize.font13,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight16,
  },
});
