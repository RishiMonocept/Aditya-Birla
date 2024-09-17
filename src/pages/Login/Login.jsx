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
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import abhiLogo from "../../assets/Login/AbhiLogo.png";
import loginBgImage from "../../assets/Login/loginBgImg.png";
import { styles } from "./login.style";
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed expo/vector-icons or another icon library

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={loginBgImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust this value based on your header size
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
                    placeholderTextColor="#797979"
                  />
                  
                  {/* Password input with show/hide feature */}
                  <View style={styles.passwordContainer}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={!passwordVisible}
                      style={styles.input}
                      placeholderTextColor="#797979"
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
                    onPress={() => console.log("Login button pressed")}
                  >
                    <Text style={styles.loginButtonText}>Login</Text>
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





