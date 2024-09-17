// BottomNavigation.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MENU from "../assets/BottomTab/Menu.png";
import PRODUCT from "../assets/BottomTab/Product.png";
import ENDORSEMENTS from "../assets/BottomTab/Endorsements.png";
import MORE from "../assets/BottomTab/More.png";
import AllReportsCard from "./My_Performance/AllReportsCard";
import Reports from "../pages/Reports";
import Home from "../pages/Home";
import ChatButton from "./ChatButton";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { routes } = state;

    return (
      <>
        <View style={styles.bottomNavigation}>
          {routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel || route.name;
            const icon = tabs.find((tab) => tab.name === route.name)?.icon;

            const isFocused = state.index === index;

            const onPress = () => {
              navigation.navigate(route.name);
            };

            return (
              <TouchableOpacity
                key={route.key}
                style={styles.navigationButton}
                onPress={onPress}
                activeOpacity={0.8}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 51,
                    height: 2.4,
                    borderBottomRightRadius: 8,
                    borderBottomLeftRadius: 8,
                    marginTop: -4,
                    marginBottom: 10,
                    backgroundColor: isFocused ? "#C7222A" : null,
                  }}
                />
                <Animated.View
                  style={[
                    styles.iconContainer,
                    {
                      transform: [
                        {
                          scale: isFocused ? 1.03 : 1,
                        },
                      ],
                    },
                  ]}
                >
                  <Image
                    source={icon}
                    style={[
                      styles.icon,
                      { tintColor: isFocused ? "#C7222A" : "gray" },
                    ]}
                  />
                </Animated.View>
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#C7222A" : "gray" },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ChatButton />
      </>
    );
  };

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={Reports} />
      <Tab.Screen name="Product" component={Home} />
      <Tab.Screen name="Endorsements" component={Reports} />
      <Tab.Screen name="More" component={Reports} />
    </Tab.Navigator>
  );
};

// Define your screen components within the same file or import them
function DashboardScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Dashboard Screen</Text>
    </View>
  );
}

function ProductScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Product Screen</Text>
    </View>
  );
}

function EndorsementsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Endorsements Screen</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>More Screen</Text>
    </View>
  );
}

const tabs = [
  {
    name: "Dashboard",
    icon: MENU,
    label: "Dashboard",
  },
  {
    name: "Product",
    icon: PRODUCT,
    label: "Product",
  },
  {
    name: "Endorsements",
    icon: ENDORSEMENTS,
    label: "Endorsements",
  },
  {
    name: "More",
    icon: MORE,
    label: "More",
  },
];

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
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
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 14.3,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavigation;
