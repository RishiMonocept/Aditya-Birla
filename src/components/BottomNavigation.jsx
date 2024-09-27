// BottomNavigation.js

import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Reports from "../pages/Reports";
import Home from "../pages/Home";
import ChatButton from "./ChatButton";
import DashBoardScreen from "../pages/DashBoardScreen";
import FormScreen from "../pages/FormScreen";
import DASHBOARD_ICON from "../assets/BottomTab/DASHBOARD_ICON.svg";
import PRODUCT_ICON from "../assets/BottomTab/PRODUCT_ICON.svg";
import ENDORSEMENT_ICON from "../assets/BottomTab/ENDORSEMENT_ICON.svg";
import MORE_ICON from "../assets/BottomTab/MORE_ICON.svg";
import DASHBOARD_ICON_SELECTED from "../assets/BottomTab/DASHBOARD_ICON_SELECTED.svg";
import PRODUCT_ICON_SELECTED from "../assets/BottomTab/PRODUCT_ICON_SELECTED.svg";
import ENDORSEMENT_ICON_SELECTED from "../assets/BottomTab/ENDORSEMENT_ICON_SELECTED.svg";
import MORE_ICON_SELECTED from "../assets/BottomTab/MORE_ICON_SELECTED.svg";

const Tab = createBottomTabNavigator();

const tabs = (isFocused) => [
  {
    name: "Dashboard",
    icon: isFocused ? <DASHBOARD_ICON_SELECTED /> : <DASHBOARD_ICON />,
    label: "Dashboard",
  },
  {
    name: "Product",
    icon: isFocused ? <PRODUCT_ICON_SELECTED /> : <PRODUCT_ICON />,
    label: "Product",
  },
  {
    name: "FormScreen",
    icon: isFocused ? <ENDORSEMENT_ICON_SELECTED /> : <ENDORSEMENT_ICON />,
    label: "Endorsements",
  },
  {
    name: "More",
    icon: isFocused ? <MORE_ICON_SELECTED /> : <MORE_ICON />,
    label: "More",
  },
];

const BottomNavigation = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <>
        <View style={styles.bottomNavigation}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel || route.name;
            const isFocused = state.index === index;

            // Get icon from the tabs array
            const tabInfo = tabs(isFocused).find(
              (tab) => tab.name === route.name
            );
            const icon = tabInfo?.icon;

            const onPress = useCallback(() => {
              navigation.navigate(route.name);
            }, [navigation, route.name]);

            return (
              <TouchableOpacity
                key={route.key}
                style={styles.navigationButton}
                onPress={onPress}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.indicator,
                    { backgroundColor: isFocused ? "#C7222A" : "transparent" },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.iconContainer,
                    {
                      transform: [{ scale: isFocused ? 1.03 : 1 }],
                    },
                  ]}
                >
                  {icon}
                </Animated.View>
                <Text
                  style={[
                    styles.buttonText,
                    { color: isFocused ? "#C7222A" : "#797979" },
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
      tabBar={(props) => !isKeyboardVisible && <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashBoardScreen} />
      <Tab.Screen name="Product" component={Reports} />
      <Tab.Screen name="FormScreen" component={FormScreen} />
      <Tab.Screen name="More" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 14.3,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  indicator: {
    position: "absolute",
    width: 51,
    height: 2.4,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginTop: -4,
    marginBottom: 10,
  },
});

export default BottomNavigation;
