import { View, Text } from "react-native";
import React from "react";

export default function SingleProgressBar({ item, width }) {
  console.log(item);
  return (
    <View
      style={{
        backgroundColor: item?.id == 1 ? "#0A6A34" : "#8DCDA9",
        height: 4,
        // flex: 1,
        width: width,
        borderRadius: 4,
      }}
    />
    // <View >
    //   {/* <View style={{ backgroundColor: "#8DCDA9", height: 4, width: 43.43,borderRadius:4 }}></View> */}
    // </View>
  );
}
