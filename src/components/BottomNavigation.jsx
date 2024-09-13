import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

const BottomNavigation = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handlePress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.bottomNavigation}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.navigationButton}
          onPress={() => handlePress(tab.name)}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[
              styles.iconContainer,
              {
                transform: [
                  {
                    scale: selectedTab === tab.name ? 1.2 : 1,
                  },
                ],
              },
            ]}
          >
            <Image
              source={tab.icon}
              style={[
                styles.icon,
                { tintColor: selectedTab === tab.name ? "#C7222A" : "gray" },
              ]}
            />
          </Animated.View>
          <Text
            style={[
              styles.buttonText,
              { color: selectedTab === tab.name ? "#C7222A" : "gray" },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const tabs = [
  {
    name: "Dashboard",
    icon: require("../assets/BottomTab/Menu.png"),
    label: "Dashboard",
  },
  {
    name: "Product",
    icon: require("../assets/BottomTab/Product.png"),
    label: "Product",
  },
  {
    name: "Endorsements",
    icon: require("../assets/BottomTab/Endorsements.png"),
    label: "Endorsements",
  },
  {
    name: "More",
    icon: require("../assets/BottomTab/More.png"),
    label: "More",
  },
];

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingHorizontal: 10,
  },
  navigationButton: {
    alignItems: "center",
    paddingVertical: 5,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 4.62,
    justifyContent: "center",
    alignItems: "center",
    padding: 3.69,
    marginBottom: 4,
    gap: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonText: {
    // fontFamily: "Anek Latin",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 14.3,
    letterSpacing: 0.01,
    textAlign: "center",
  },
});

export default BottomNavigation;
