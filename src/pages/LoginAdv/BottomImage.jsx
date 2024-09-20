import { ImageBackground, Keyboard, View } from "react-native";
import React, { useEffect, useState } from "react";
import loginBgImage from "../../assets/Login/login-bg.png";

const BottomImage = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
    });

    // Cleanup listeners on unmount
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    !isKeyboardVisible && (
      <View style={{ flex: 0.35 }}>
        <ImageBackground
          source={loginBgImage}
          style={{ flex: 1, opacity: 0.9 }}
          resizeMode="cover"
        />
      </View>
    )
  );
};

export default BottomImage;
