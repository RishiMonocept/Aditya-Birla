import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import NavigationsTab from "../Tabs/NavigationsTab";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <NavigationsTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

export default Home;
