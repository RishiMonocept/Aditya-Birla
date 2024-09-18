import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CustomButton({ title, subTitle }) {
  return (
    <>
      <TouchableOpacity
        style={styles.loginButton}
        // onPress={handleLogin}
        // disabled={loading}
      >
        <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.employee}>{subTitle}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#C7222A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  employee: {
    alignSelf: "center",
    color: "#C7222A",
    fontSize: 14,
    fontFamily: "400",
    lineHeight: 15.4,
    marginTop: -5,
  },
});
