import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./home.style";
import Dashboard from "../components/Dashboard";

const DashBoardScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Dashboard />
    </SafeAreaView>
  );
};

export default DashBoardScreen;
