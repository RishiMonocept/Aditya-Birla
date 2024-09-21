import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function InputPassword({ inputValue, setInputValue }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleSubmitEditing = () => {
    inputRef2.current.focus();
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        ref={inputRef1}
        placeholder="User Code"
        style={styles.input}
        keyboardType="visible-password"
        placeholderTextColor="#797979"
        value={inputValue?.email}
        onChangeText={(e) =>
          setInputValue((prevData) => ({ ...prevData, email: e }))
        }
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="next"
      />
      <View style={{ gap: 8 }}>
        <View style={styles.passwordContainer}>
          <TextInput
            ref={inputRef2}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 24,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderColor: "#F1F3F6",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    borderColor: "#F1F3F6",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingRight: 6,
    paddingLeft: 16,
  },
  showHideIcon: {
    justifyContent: "center",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "#C7222A",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 13.2,
  },
});
