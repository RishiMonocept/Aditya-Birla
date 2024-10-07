import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles/HeaderWithoutIcon.style";

const HeaderWithouIcon = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderWithouIcon;
