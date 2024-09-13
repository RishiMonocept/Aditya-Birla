import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles/Header.style";
import BACK_ICON from "../../assets/Back.png";

const Header = () => {
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.backBarContainer}>
        <Image source={BACK_ICON} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Your Profile</Text>
      </View>
    </View>
  );
};

export default Header;
