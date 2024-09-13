import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./NavigationsTab.style";

const NavigationsTab = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={activeTab === "Notifications" ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab("Notifications")}
      >
        <Text
          style={
            activeTab === "Notifications"
              ? styles.activeTabText
              : styles.tabText
          }
        >
          Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={activeTab === "Activities" ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab("Activities")}
      >
        <Text
          style={
            activeTab === "Activities" ? styles.activeTabText : styles.tabText
          }
        >
          Activities
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationsTab;
