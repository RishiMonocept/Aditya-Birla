import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomImage from "./BottomImage";
import ToggleButtons from "./ToggleButtons";
import OTPVerification from "./OTP/OtpVerification";
import InputPassword from "../../components/Login/InputPassword";
import CustomButton from "../../components/Login/CustonButton";
import InputBox from "../../components/Login/InputBox";
import EmployeeLogin from "../../components/Login/EmployeeLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { CommonActions, useNavigation } from "@react-navigation/native";

const LoginAdv = () => {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: "testuser1@monocept.com",
    password: "12345",
  });
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isEmployee, setIsEmployee] = useState(false);
  const [sendOTP, setSendOTP] = useState(false);
  const [inputNum, setInputNum] = useState("");
  const [inputBoxValue, setInputBoxValue] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Reset states when selected changes to 0
  useEffect(() => {
    if (selected === 0) {
      setIsEmployee(false);
      setSendOTP(false);
      setInputNum("");
      setInputBoxValue("");
      setSearchText("");
    }
  }, [selected]);

  const handleLogin = async () => {
    setLoading(true);
    const url = "https://usp.monocept.ai/abhiupapi/Banca/User/Agent/AgentLogin";
    const data = {
      agentUserName: loginData.email,
      agentPassword: loginData.password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Toast.show({
          type: "success",
          position: "top",
          text1: "Login Successful",
          text2: "You have successfully logged in.",
          visibilityTime: 3000,
        });
        AsyncStorage.setItem("UserData", JSON.stringify(result));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "BottomTabs" }],
          })
        );
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Login Failed",
          text2: result.message || "Please check your credentials.",
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "right",
        text1: "Error",
        text2: "An error occurred: " + error.message,
        visibilityTime: 3000,
      });
    } finally {
      const userData = await AsyncStorage.getItem("UserData");
      console.log(
        "UserData:",
        userData ? JSON.parse(userData) : "No user data"
      );
      setLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "BottomTabs" }],
        })
      );
    }
  };

  const checkNumEntered = () => {
    console.log("Verify OTP pressed without num");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 0.65 }}>
          <View
            style={{
              marginTop: 56,
              marginHorizontal: 16,
              flex: 1,
              gap: 40,
            }}
          >
            <View>
              <Text style={styles.headingTextName}>Hi Ajay,</Text>
              <Text style={styles.headingText}>
                {`Welcome to Aditya Birla Health \nInsurance!`}
              </Text>
            </View>
            <ToggleButtons selected={selected} setSelected={setSelected} />
            {!selected ? (
              <InputPassword
                inputValue={loginData}
                setInputValue={setLoginData}
              />
            ) : sendOTP ? (
              <OTPVerification
                title={inputNum ? inputNum : " " + inputBoxValue}
              />
            ) : !isEmployee ? (
              <InputBox value={inputBoxValue} setValue={setInputBoxValue} />
            ) : (
              <EmployeeLogin
                setInputNum={(num) => setInputNum(num)}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
            <CustomButton
              loading={loading}
              title={!selected ? "Login" : !sendOTP ? "Send OTP" : "Verify OTP"}
              subTitle={
                !selected
                  ? "I'm an employee"
                  : !isEmployee
                  ? "I'm an employee"
                  : "Login as Customer"
              }
              onPressB1={!selected ? handleLogin : checkNumEntered}
              onPressB2={() => setIsEmployee(!isEmployee)}
              sendOTP={() => {
                // Logic for sending OTP
                setSendOTP(true);
              }}
              inputBoxValue={inputBoxValue}
              setInputBoxValue={setInputBoxValue}
              inputNum={inputNum}
              setInputNum={setInputNum}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </View>
        </KeyboardAvoidingView>
        <BottomImage />
        <StatusBar backgroundColor={"#F7F7F7"} barStyle={"dark-content"} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginAdv;

const styles = StyleSheet.create({
  headingTextName: {
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 28,
    color: "#000000",
  },
  headingText: {
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 28,
    color: "#000",
  },
});
