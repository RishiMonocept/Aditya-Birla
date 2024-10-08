import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  borderRadius,
  spacing,
  spacingModerateScale,
} from "../../../res/dimension";
import colors from "../../../res/theme/colors";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";
import CROSS_ICON from "../../../assets/AllQuotes/crossIcon.svg";

export default function FilterModal({ openFilterModal, setOpenFilterModal }) {
  return (
    <Modal visible={openFilterModal} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.outerContainer}>
          <View style={{ gap: 32 }}>
            <View style={styles.topContainer}>
              <Text style={styles.ActionText}>Filter</Text>
              <TouchableOpacity
                style={styles.crossIcon}
                onPress={() => setOpenFilterModal(false)}
              >
                <CROSS_ICON />
              </TouchableOpacity>
            </View>

            <View style={styles.productsContainer}>
                <Text style={styles.productText}>Products</Text>

            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  outerContainer: {
    paddingTop: spacingModerateScale.space_m4,
    paddingRight: spacingModerateScale.space_m2,
    paddingBottom: spacingModerateScale.space_l2,
    paddingLeft: spacingModerateScale.space_m2,
    gap: spacingModerateScale.space_10,
    borderTopLeftRadius: borderRadius.borderRadius12,
    borderTopRightRadius: borderRadius.borderRadius12,
    backgroundColor: colors.primaryColors.lightShadeGray,
  },
  topContainer: {
    flexDirection: "row",
    gap: spacingModerateScale.space_l1,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  ActionText: {
    fontSize: fontSize.font22,
    fontWeight: fontWeight.weight600,
    lineHeight: lineHeight.lineHeight28,
  },
  crossIcon: {
    height: spacing.space_22,
    width: spacing.space_22,
    alignItems: "center",
    justifyContent: "center",
  },
  productsContainer:{
    gap:spacingModerateScale.space_m1,

  },
  productText:{
    fontSize:fontSize.font18,
    fontWeight:fontWeight.weight600,
    lineHeight:lineHeight.lineHeight19dot8,
    color:colors.primaryColors.black,
  }
});
