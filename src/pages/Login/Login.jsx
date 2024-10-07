import {
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import abhiLogo from "../../assets/Login/AbhiLogo.png";
import loginBgImage from "../../assets/Login/loginBgImg.png";
import { styles } from "./login.style";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed expo/vector-icons or another icon library
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: "testuser1@monocept.com",
    password: "12345",
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

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
      console.log("result", result);

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
        navigation.replace("BottomTabs");
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
        position: "top",
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
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={loginBgImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // Adjust this value based on your header size
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                {/* Logo Section */}
                <View style={styles.logoContainer}>
                  <Image source={abhiLogo} style={styles.logoImage} />
                </View>

                {/* Red Section */}
                <View style={styles.redSection}></View>
              </View>

              <View style={styles.mainContainer}>
                <View style={styles.formContainer}>
                  <Text style={styles.heading}>
                    Welcome to Aditya Birla Health Insurance
                  </Text>

                  <TextInput
                    placeholder="Username"
                    style={styles.input}
                    keyboardType="visible-password"
                    placeholderTextColor="#797979"
                    value={loginData.email}
                    onChangeText={(e) =>
                      setLoginData((prevData) => ({ ...prevData, email: e }))
                    }
                  />

                  {/* Password input with show/hide feature */}
                  <View style={styles.passwordContainer}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={!passwordVisible}
                      style={styles.input}
                      placeholderTextColor="#797979"
                      keyboardType={
                        passwordVisible ? "visible-password" : "default"
                      }
                      value={loginData.password}
                      onChangeText={(e) =>
                        setLoginData((prevData) => ({
                          ...prevData,
                          password: e,
                        }))
                      }
                    />
                    <TouchableOpacity
                      style={styles.showHideIcon}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                      <Ionicons
                        name={passwordVisible ? "eye-off" : "eye"}
                        size={20}
                        color="#797979"
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Forgot Password Link */}
                  <TouchableOpacity
                    onPress={() => console.log("Forgot Password pressed")}
                    style={styles.forgotPasswordContainer}
                  >
                    <Text style={styles.forgotPasswordText}>
                      Forgot Password
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator color={"#fff"} />
                    ) : (
                      <Text style={styles.loginButtonText}>Login</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}
