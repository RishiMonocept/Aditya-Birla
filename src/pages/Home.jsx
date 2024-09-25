import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import NavigationsTab from "../Tabs/NavigationsTab";
import ActivitiesList from "../components/Activity";
import NotificationsList from "../components/Notifications";
import { StatusBar } from "expo-status-bar";
import Dashboard from "../components/Dashboard";



const Home = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        {/* <Header title={"Your Profile"} />
        <NavigationsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Notifications" ? (
          <NotificationsList />
        ) : (
          <ActivitiesList />
        )} */}
        <Dashboard />

       
      </SafeAreaView>
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;
