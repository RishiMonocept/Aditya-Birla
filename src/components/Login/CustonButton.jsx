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
  onPressB1 = null,
  onPressB2 = null,
  title,
  subTitle,
  sendOTP,
}) {
  const handlePress = () => {
    if (title === "Send OTP") {
      sendOTP();
    } else {
      onPressB1();
    }
  };

  return (
    <View style={{ gap: 13 }}>
      <TouchableOpacity
        style={styles.loginButton}
        disabled={loading}
        onPress={handlePress}
      >
        {loading ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <Text style={styles.loginButtonText}>{title}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressB2}>
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
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  employeeText: {
    alignSelf: "center",
    color: "#C7222A",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.4,
  },
});
