import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
} from "../../res/theme/fonts";
import colors from "../../res/theme/colors";
import { ShadowRadius } from "../../res/dimension";

export default function TopSellingProduct() {
  return (
    <View style={styles.topsellingContainer}>
      <Text style={fontStyle.subHeading}>Top Selling Products</Text>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topsellingContainer: {
    gap: 32,
    marginTop: 40,
  },

  topSellingText: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight36,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.black,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
  },
});
