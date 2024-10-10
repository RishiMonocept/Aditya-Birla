import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  borderRadius,
  sizeWithoutScale,
  spacingModerateScale,
} from "../../../res/dimension";
import { StyleSheet } from "react-native";
import colors from "../../../res/theme/colors";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";
import CHECKED_ICON from "../../../assets/AllQuotes/Checked.svg";

export default function FilterCheckBoxAndText({ title }) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setChecked(!checked)}
      >
        {checked && <CHECKED_ICON />}
      </TouchableOpacity>

      <Text style={styles.filterText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: spacingModerateScale.space_base,
    flexDirection: "row",
    width: "48%",
    alignItems: "center",
  },
  checkboxContainer: {
    height: sizeWithoutScale.height16,
    width: sizeWithoutScale.width16,
    borderRadius: borderRadius.borderRadius4,
    borderWidth: 1,
    borderColor: colors.primaryColors.grayGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedContainer: {
    backgroundColor: colors.primaryColors.grayGreen,
  },
  filterText: {
    fontSize: fontSize.font16,
    fontWeight: fontWeight.weight400,
    lineHeight: lineHeight.lineHeight17dot6,
    color: colors.primaryColors.black,
  },
});
