import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeadsPersonalDetails from "./PersonalDetails/LeadsPersonalDetails";
/**
 * NOTE(Depretiated) : Not in use, navigate to FormScreen.jsx
 */
export default function LeadsFormDetails() {
  return (
    <View style={styles.mainContainer}>
      {/* //Here we will be switich the Middle componets when continew is pressed */}
      <LeadsPersonalDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    // backgroundColor: "blue",
    // flex: 1,
    marginTop: 24,
    marginBottom: 36,
  },
});
