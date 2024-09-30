import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../../res/theme/colors";
import {
  borderRadius,
  shadowOpacityElevation,
  spacing,
} from "../../../res/dimension";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";

export default function TopSellingProductCard({
  icon,
  planName,
  price,
  coverage,
  benifits1,
  benifits2,
  checkedIcon,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.planName}>{planName}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.preyeat}>/year</Text>
        </View>
      </View>

      <View style={styles.benifitsContainer}>
        <View style={styles.benifits1}>
          <View>{checkedIcon}</View>

          <Text>{coverage}</Text>
        </View>
        <View style={styles.benifits1}>
          <View>{checkedIcon}</View>
          <Text>{benifits1}</Text>
        </View>
        <View style={styles.benifits1}>
          <View>{checkedIcon}</View>
          <Text>{benifits2}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: spacing.space_m1,
    paddingVertical: spacing.space_13,
    gap: spacing.space_m3,
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
  icon: {
    height: spacing.space_m5,
    width: spacing.space_m5,
  },
  planName: {
    fontSize: fontSize.font16,
    lineHeight: lineHeight.lineHeight17dot6,
    fontWeight: fontWeight.weight700,
  },
  price: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font24,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.vibrantRed,
  },
  preyeat: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font24,
    fontWeight: fontWeight.weight600,
  },
  benifitsContainer: {
    gap: spacing.space_s2,
    paddingLeft: spacing.space_s2,
  },
  benifits1: {
    flexDirection: "row",
    gap: spacing.space_base,
  },
});
