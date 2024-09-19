import React, { useState, useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./otpVerification.style";

const OTPVerification = ({ title, accessId }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    // console.log("Hi I am text", text);
    console.log(newOtp);

    setOtp(newOtp);
    console.log("OTP", otp);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // if (text.length === 0 && index > 0) {
    //   inputRefs.current[index - 1].focus();
    // }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    if (otp[index]) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("OTP entered:", enteredOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              handleKeyPress(index, nativeEvent.key)
            }
            onFocus={() => handleFocus(index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;
