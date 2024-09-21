import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CustomButton({
  loading,
  onPressB1 = null,
  onPressB2 = null,
  title,
  subTitle,
  sendOTP,
  inputBoxValue,
  setInputBoxValue,
  inputNum,
  setInputNum,
  searchText,
  setSearchText,
}) {
  // console.log(inputBoxValue?.length < 10, "InputBoxValue");
  // console.log(loading, "Loading");
  // console.log(inputNum, "inputNum");
  // console.log(inputBoxValue?.length !== 10 && subTitle === "I'm an employee");
  const navigation = useNavigation();

  const handlePress = () => {
    if (subTitle === "Login as Customer") setInputBoxValue(null);

    if (title === "Send OTP") {
      sendOTP();
    } else {
      onPressB1();
    }
  };

  const handlePressB2 = () => {
    setInputBoxValue(null);
    setSearchText(null);
    setInputNum(null);
    onPressB2();
    // if (title === "Verify OTP") {
    //   navigation.goBack();
    // }
  };

  return (
    <View style={{ gap: 13 }}>
      <TouchableOpacity
        style={styles.loginButton}
        disabled={
          loading ||
          (!inputBoxValue &&
            subTitle === "I'm an employee" &&
            title != "Login") ||
          (inputBoxValue?.length !== 10 &&
            subTitle === "I'm an employee" &&
            title != "Login") ||
          (!inputNum && subTitle === "Login as Customer" && title != "Login") ||
          (inputNum?.length < 10 &&
            subTitle === "Login as Customer" &&
            title != "Login")
        }
        onPress={handlePress}
      >
        {loading ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <Text style={styles.loginButtonText}>{title}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressB2}>
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
