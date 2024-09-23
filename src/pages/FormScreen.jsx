import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import { StatusBar } from "expo-status-bar";
import LeadsForm from "./Form/LeadsForm";

const FormScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <SafeAreaView style={styles.safeAreaView}>
          <Header title={"Proposal"} />
          <StatusBar style="dark" />
          <LeadsForm />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormScreen;
