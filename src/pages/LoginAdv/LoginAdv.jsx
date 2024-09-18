import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomImage from "./BottomImage";
import ToggleButtons from "./ToggleButtons";
import OTPVerification from "./OTP/OtpVerification";
import InputPassword from "../../components/Login/InputPassword";
import CustomButton from "../../components/Login/CustonButton";
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
      // console.log("result", result);

      if (response.ok) {
        // console.log("Hello");
        Toast.show({
          type: "success",
          position: "top",
          text1: "Login Successful",
          text2: "You have successfully logged in.",
          visibilityTime: 3000,
        });
        AsyncStorage.setItem("UserData", JSON.stringify(result));
        // navigation.navigate("BottomTabs");
        setLoading(false);
        // navigation.replace("BottomTabs");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "BottomTabs" }], // Your main screen after login
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
        setLoading(false);
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
    }
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
              gap: 24,
            }}
          >
            <View>
              <Text style={styles.headingTextName}>Hi Ajay,</Text>
              <Text style={styles.headingText}>
                {`Welcome to Aditya Birla Health \nInsurance!`}
              </Text>
            </View>
            <ToggleButtons />

            <InputPassword
              inputValue={loginData}
              setInputValue={setLoginData}
            />
            <CustomButton
              loading={loading}
              title={"Login"}
              subTitle={"I'm an employee"}
              onPress={handleLogin}
            />
          </View>
        </KeyboardAvoidingView>
        <BottomImage />
        <StatusBar backgroundColor={"#F7F7F7"} barStyle={"light-content"} />
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
    color: "#000",
  },
  headingText: {
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 28,
    color: "#000",
  },
});
