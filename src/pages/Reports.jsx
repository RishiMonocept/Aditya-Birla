import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import ChatButton from "../components/ChatButton";
import BottomNavigation from "../components/BottomNavigation";
import { StatusBar } from "expo-status-bar";
import All_Reports_Card from "../components/My_Performance/All_Reports_Card";

const Reports = () => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title={"All Reports"} />
        <All_Reports_Card/>
      </SafeAreaView>
      <BottomNavigation />
      <ChatButton />
      <StatusBar style="dark" />
    </>
  );
};

export default Reports;
