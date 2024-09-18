import { View, ImageBackground, StyleSheet, TextInput, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomImage from "./BottomImage";
import InputPassword from "../../components/Login/InputPassword";
import CustomButton from "../../components/Login/CustonButton";

const LoginAdv = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.65, borderWidth: 2 }}>
        <View
          style={{
            marginTop: 56,
            marginHorizontal: 16,
            borderWidth: 1,
            flex: 1,
            gap: 24,
          }}
        >
          <View>
            <Text style={styles.headingTextName}>Hi Ajay,</Text>
            <Text style={styles.headingText}>Welcome to Aditya Birla Health</Text>
            <Text style={styles.headingText}>Insurance!</Text>
          </View>
          <TextInput
            placeholder="User Code"
            style={styles.input}
            keyboardType="visible-password"
            placeholderTextColor="#797979"
            // value={loginData.email}
            // onChangeText={(e) =>
            //   setLoginData((prevData) => ({ ...prevData, email: e }))
            // }
          />
          <InputPassword />
          <CustomButton title={"Login"} subTitle={"I'm an employee"} />
        </View>
      </View>
      <BottomImage />
    </SafeAreaView>
  );
};

export default LoginAdv;

const styles = StyleSheet.create({
  headingTextName:{
    fontSize:22,
    fontWeight:"600",
    lineHeight:28,
    color:"#000000"
  },
  headingText:{
    fontSize:19,
    fontWeight:"600",
    lineHeight:28,
    color:"#000000"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#F1F3F6",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingLeft:8,
    paddingRight:16,

    // marginBottom: 15,
  },
});
