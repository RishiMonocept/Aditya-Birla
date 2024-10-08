import { View, Text, Modal } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { borderRadius, spacingModerateScale } from "../../../res/dimension";
import colors from "../../../res/theme/colors";

export default function FilterModal({ openFilterModal, setOpenFilterModal }) {
  return (
    <Modal visible={openFilterModal} animationType="slide" transparent={true}>
      <View style={styles.overlay}>

    <View style={styles.outerContainer}>
        <View style={{gap:32}}>
            

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
  outerContainer:{
    paddingTop:spacingModerateScale.space_m4,
    paddingRight:spacingModerateScale.space_m2,
    paddingBottom:spacingModerateScale.space_l2,
    paddingLeft:spacingModerateScale.space_m2,
    gap:spacingModerateScale.space_10,
    borderTopLeftRadius:borderRadius.borderRadius12,
    borderTopRightRadius:borderRadius.borderRadius12,
    backgroundColor:colors.primaryColors.lightShadeGray,
  }
});
