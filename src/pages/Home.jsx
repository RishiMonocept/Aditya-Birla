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
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <Header title={"Your Profile"} />
        <NavigationsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Notifications" ? (
          <NotificationsList />
        ) : (
          <ActivitiesList />
        )}
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
