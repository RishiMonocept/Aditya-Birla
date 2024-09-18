import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function InputPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={styles.input}
          placeholderTextColor="#797979"
          keyboardType={passwordVisible ? "visible-password" : "default"}
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
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft:8,
    paddingRight:16,
    backgroundColor:"#FFFFFF",
    borderColor: "#F1F3F6",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    position: "relative",
  },
  input:{
    width:"90%"
  },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "#F1F3F6",
//     backgroundColor: "#FFFFFF",
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
  showHideIcon: {
    position: "absolute",
    right: 10,
    height: 33,
    top: 9,
    // justifyContent: "center",
  },
  forgotPasswordContainer: {
    // flexDirection:,
    marginTop: -35,
    // marginBottom:40,
    alignSelf: "flex-end",
    marginRight: 2,
  },
  forgotPasswordText: {
    color: "#C7222A",
    fontSize: 12,
    fontWeight: "400",
  },
});
