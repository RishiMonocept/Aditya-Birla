import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import NavigationsTab from "../Tabs/NavigationsTab";
import ChatButton from "../components/ChatButton";
import NotificationsCard from "../components/Notifications/Card";
import ActivityCard from "../components/Activity/Card";
import BottomNavigation from "../components/BottomNavigation";
import ActivitiesList from "../components/Activity";
import NotificationsList from "../components/Notifications";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <NavigationsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Notifications" ? (
          <NotificationsList />
        ) : (
          <ActivitiesList />
        )}
      </SafeAreaView>
      <BottomNavigation />
      <ChatButton />
      <StatusBar style="dark" />
    </>
  );
};

export default Home;
