import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { borderRadius } from "../../../res/dimension";

const ProgressBar = ({ percentage }) => {
  return (
    <View style={styles.conatiner}>
      {/* <Text>ProgressBar</Text> */}
      <View
        style={{
          width: percentage,
          height: 7,
          backgroundColor: "#1F874C",
          alignSelf: "flex-start",
          borderRadius: borderRadius.borderRadius16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#E7FCF4",
    height: 13,
    width: "100%",
    borderRadius: borderRadius.borderRadius16,
    // alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2.5,
  },
});

export default ProgressBar;
