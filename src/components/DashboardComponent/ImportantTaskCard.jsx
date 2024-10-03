import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { fontSize, fontWeight, lineHeight } from "../../res/theme/fonts";
import {
  spacing,
  borderRadius,
  shadowOpacityElevation,
  ShadowRadius,
} from "../../res/dimension.js";
import colors from "../../res/theme/colors.js";

export default function ImportantTaskCard({
  icon,
  textmessage,
  taskheader,
  tasksubheader,
}) {
  return (
    <View style={styles.achievetarget}>
      <View style={styles.starHeadline}>
        <Image
          style={{ height: 11, width: 11 }}
          source={icon}
          resizeMethod="contain"
        />
        <Text style={styles.textTarget}>{textmessage}</Text>
        <Image
          style={{ height: 11, width: 11 }}
          source={icon}
          resizeMethod="contain"
        />
      </View>
      <Text style={styles.taskHeaderText}>{taskheader}</Text>
      <Text style={styles.subtasktext}>{tasksubheader}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  achievetarget: {
    paddingRight: spacing.space_m2,
    paddingBottom: spacing.space_m1,
    paddingLeft: spacing.space_m2,
    gap: spacing.space_base,
    backgroundColor: colors.primaryColors.white,
    borderWidth: 2,
    borderColor: colors.primaryColors.white,
    borderRadius: spacing.space_base,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 1,
    shadowColor: "#AEAEB7",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
  },
  starHeadline: {
    paddingHorizontal: spacing.space_base,
    paddingVertical: spacing.space_s2,
    gap: spacing.space_s2,
    backgroundColor: colors.primaryColors.warmIvory,
    borderBottomRightRadius: borderRadius.borderRadius8,
    borderBottomLeftRadius: borderRadius.borderRadius8,
    flexDirection: "row",
    alignSelf: "center",
  },
  textTarget: {
    fontSize: fontSize.font12,
    lineHeight: lineHeight.lineHeight14dot4,
    fontWeight: fontWeight.weight600,
    Color: colors.primaryColors.naturalGray,
  },
  taskHeaderText: {
    fontSize: fontSize.font18,
    lineHeight: lineHeight.lineHeight21dot6,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.naturalGray,
  },
  subtasktext: {
    fontSize: fontSize.font16,
    lineHeight: lineHeight.lineHeight16dot8,
    fontWeight: fontWeight.weight400,
    color: colors.primaryColors.black,
  },
});
