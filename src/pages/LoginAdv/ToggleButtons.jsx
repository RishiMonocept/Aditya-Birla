import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./toggleButton.style";

const ToggleButtons = ({ selected, setSelected }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userCodeContainer}>
        <TouchableOpacity
          onPress={() => setSelected(0)}
          style={{
            ...styles.userCodeButton,
            backgroundColor: selected === 0 ? "#E7FCF4" : null,
          }}
        >
          <Text
            style={{
              ...styles.ButtonText,
              fontWeight: selected === 0 ? "600" : "400",
              color: selected === 0 ? "#C7222A" : "#000",
            }}
          >
            Login with User Code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userCodeContainer}>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          style={{
            ...styles.userCodeButton,
            backgroundColor: selected !== 0 ? "#E7FCF4" : null,
          }}
        >
          <Text
            style={{
              ...styles.ButtonText,
              fontWeight: selected !== 0 ? "600" : "400",
              color: selected !== 0 ? "#C7222A" : "#000",
            }}
          >
            Login with OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleButtons;
