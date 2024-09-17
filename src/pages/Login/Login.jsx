import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function Login() {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: "testuser1@monocept.com",
    password: "12345",
  });

  const handleLogin = async () => {
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
      console.log(result);

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
        navigation.replace("BottomTabs");
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
    }
  };

  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          borderWidth: 1,
          width: 250,
          height: 500,
          marginTop: 40,
          padding: 10,
        }}
      >
        <Text>Login</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            marginTop: 6,
            padding: 5,
          }}
          placeholder="email"
          value={loginData.email}
          onChangeText={(e) => setLoginData({ email: e })}
        />
        <Text>Password</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            marginTop: 6,
            padding: 5,
          }}
          placeholder="password"
          value={loginData.password}
          onChangeText={(e) => setLoginData({ password: e })}
        />

        <TouchableOpacity
          style={{
            borderColor: "grey",
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: "#C197C6",
          }}
          onPress={handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
