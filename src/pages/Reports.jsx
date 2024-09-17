import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import ChatButton from "../components/ChatButton";
import BottomNavigation from "../components/BottomNavigation";
import { StatusBar } from "expo-status-bar";
import All_Reports_Card from "../components/My_Performance/AllReportsCard";
import FilterSlide from "../components/Filter/FilterSlide";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import AllReportsCard from "../components/My_Performance/AllReportsCard";
import { ScrollView } from "react-native";

const Reports = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title={"All Reports"} />
        <Search />
        <FilterSlide />
      </SafeAreaView>
      <View style={{ ...styles.safeAreaView, flex: 1 }}>
        <AllReportsCard />
      </View>
      {/* <BottomNavigation /> */}
      {/* <ChatButton /> */}
    </View>
  );
};

export default Reports;
