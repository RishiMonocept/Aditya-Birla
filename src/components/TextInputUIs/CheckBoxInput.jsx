import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CHECKED_ICON from "../../assets/AllQuotes/Checked.svg";
import DELETE_ICON from "../../assets/Forms/delete_icon.svg";
import {
  spacingModerateScale,
  spacingScale,
  spacingVerticalScale,
} from "../../res/ScaledSheet";

export default function CheckBoxInput({ checked, setChecked }) {
  //   const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.memberDetailContainer}>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          gap: spacingScale.base,
          alignItems: "center",
          width: spacingScale.space_194,
        }}
      >
        <TouchableOpacity
          style={[
            styles.checkboxContainer,
            {
              borderColor: checked ? "#2E2E2E" : null,
              borderWidth: checked ? 0 : 1, // You can adjust the width here if needed
              borderRadius: checked ? 0 : spacingModerateScale.s2, // You can adjust the radius here if needed
            },
          ]}
          onPress={handlePress}
        >
          {checked && <CHECKED_ICON />}
        </TouchableOpacity>
        <View
          style={{
            height: spacingVerticalScale.l2,
            width: spacingScale.l3,
            backgroundColor: "#fff",
            borderRadius: spacingModerateScale.m4,
          }}
        ></View>

        <Text style={styles.filterText}>ABC</Text>
      </View>

      {checked && (
        <View style={styles.deleteContainer}>
          <TextInput
            placeholder="Enter Age"
            style={styles.textInputContainer}
          />
          <DELETE_ICON />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  memberDetailContainer: {
    justifyContent: "space-between",
    paddingHorizontal: spacingScale.m3,
    paddingVertical: spacingVerticalScale.base,
    gap: spacingModerateScale.base,
    borderRadius: spacingModerateScale.m3,
    borderWidth: 1,
    backgroundColor: "#F1F3F6",
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxContainer: {
    margin: spacingModerateScale.s3,
    height: spacingVerticalScale.space_18,
    width: spacingScale.space_18,

    // borderColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedContainer: {
    // backgroundColor: "red",
  },
  filterText: {
    fontSize: spacingModerateScale.m2,
    lineHeight: spacingVerticalScale.space_16dot8,
    fontWeight: "400",
    color: "#000",
  },
  deleteContainer: {
    gap: spacingModerateScale.base,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderRadius: spacingModerateScale.m3,
    paddingHorizontal: spacingScale.base,
  },
});
