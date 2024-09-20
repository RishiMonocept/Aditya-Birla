import { View, TextInput, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function InputBox() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);


  const onFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 0.5, 
      duration: 100, 
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!inputRef.current || !inputRef.current.isFocused()) {
      setIsFocused(false);
      Animated.timing(animatedValue, {
        toValue: 0, 
        duration: 200, 
        useNativeDriver: false,
      }).start();
    }
  };


  const animatedStyle = {
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 10], 
    }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30], 
        }),
      },
    ],
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
        <Animated.Text style={[styles.Phoneplaceholder, animatedStyle]}>
          Mobile Number
        </Animated.Text>
      </TouchableWithoutFeedback>

      {/* Text Input */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholderTextColor="#797979"
        onFocus={onFocus} 
        onBlur={onBlur} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Phoneplaceholder: {
    position: "absolute",
    top: 14, 
    left: 16,
    zIndex: 100,
    color: "#797979",
  },
  input: {
    width: "100%",
    borderColor: "#F1F3F6",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 12,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
