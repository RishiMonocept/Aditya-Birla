import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

export default function CustomButton({
  loading,
  onPress = null,
  title,
  subTitle,
}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.loginButton}
        // onPress={handleLogin}
        disabled={loading}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <Text style={styles.loginButtonText}>{title}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.employeeButton}>
        <Text style={styles.employeeText}>{subTitle}</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 30,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  employeeButton: {
    marginTop: 13,
  },
  employeeText: {
    alignSelf: "center",
    color: "#C7222A",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.4,
    // marginTop: -5,
  },
});
