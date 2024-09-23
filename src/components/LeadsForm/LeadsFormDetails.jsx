import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeadsPersonalDetails from "./PersonalDetails/LeadsPersonalDetails";

export default function LeadsFormDetails() {
  return (
    <View style={styles.mainContainer}>
      <LeadsPersonalDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    // backgroundColor: "blue",
    marginTop: 24,
    marginBottom: 36,
  },
});
