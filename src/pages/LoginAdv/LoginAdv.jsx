import { View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomImage from "./BottomImage";

const LoginAdv = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.65, borderWidth: 2 }}>
        <View
          style={{
            marginTop: 56,
            marginHorizontal: 16,
            borderWidth: 1,
            flex: 1,
          }}
        ></View>
      </View>
      <BottomImage />
    </SafeAreaView>
  );
};

export default LoginAdv;
