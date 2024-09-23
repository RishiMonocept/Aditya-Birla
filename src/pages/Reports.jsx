import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import FilterSlide from "../components/Filter/FilterSlide";
import Search from "../components/Search/Search";
import AllReportsCard from "../components/My_Performance/AllReportsCard";

const Reports = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <Header title={"All Reports"} />
        <Search />
        <FilterSlide />
      </View>
      <View style={{ flex: 1 }}>
        <AllReportsCard />
      </View>
    </SafeAreaView>
  );
};

export default Reports;
