import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ChatButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require("../assets/BottomTab/FAB-Saathi.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 78,
    right: 10,
    width: 48,
    height: 48,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ChatButton;
