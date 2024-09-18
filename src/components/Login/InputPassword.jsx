import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function InputPassword({ inputValue, setInputValue }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <TextInput
        placeholder="User Code"
        style={styles.input}
        keyboardType="visible-password"
        placeholderTextColor="#797979"
        value={inputValue?.email}
        onChangeText={(e) =>
          setInputValue((prevData) => ({ ...prevData, email: e }))
        }
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={{ width: "90%" }}
          placeholderTextColor="#797979"
          keyboardType={passwordVisible ? "visible-password" : "default"}
          value={inputValue?.password}
          onChangeText={(e) =>
            setInputValue((prevData) => ({ ...prevData, password: e }))
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
      <TouchableOpacity
        onPress={() => console.log("Forgot Password pressed")}
        style={styles.forgotPasswordContainer}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    width: "100%",
    // height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderColor: "#F1F3F6",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    position: "relative",
  },
  input: {
    marginVertical: 24,
    width: "100%",
    // height: 40,
    borderColor: "#F1F3F6",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
  },
  showHideIcon: {
    position: "absolute",
    right: 10,
    height: 33,
    top: 11,
  },
  forgotPasswordContainer: {
    marginTop: -35,
    alignSelf: "flex-end",
    marginRight: 2,
  },
  forgotPasswordText: {
    color: "#C7222A",
    fontSize: 12,
    fontWeight: "400",
    marginRight: 3,
  },
});
