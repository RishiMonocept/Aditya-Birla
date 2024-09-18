import { ImageBackground, View } from "react-native";
import React from "react";
import loginBgImage from "../../assets/Login/login-bg.png";

const BottomImage = () => {
  return (
    <View style={{ flex: 0.35, borderWidth: 2 }}>
      <ImageBackground
        source={loginBgImage}
        style={{ flex: 1, opacity: 0.9 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default BottomImage;
