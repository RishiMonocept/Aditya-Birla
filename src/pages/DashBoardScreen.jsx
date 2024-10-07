import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./home.style";
import Dashboard from "../components/Dashboard";
import { StatusBar } from "expo-status-bar";

const DashBoardScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Dashboard />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default DashBoardScreen;
