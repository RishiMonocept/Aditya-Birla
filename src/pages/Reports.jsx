import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import ChatButton from "../components/ChatButton";
import BottomNavigation from "../components/BottomNavigation";
import { StatusBar } from "expo-status-bar";
import FilterSlide from "../components/Filter/FilterSlide";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const Reports = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title={"All Reports"} />
        <Search />
        <FilterSlide />
      </SafeAreaView>
      <BottomNavigation />
      <ChatButton />
      <StatusBar style="dark" />
    </View>
  );
};

export default Reports;
