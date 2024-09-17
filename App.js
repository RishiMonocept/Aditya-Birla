import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";
import Reports from "./src/pages/Reports";
import { useRef } from "react";
import BottomNavigation from "./src/components/BottomNavigation";
import ChatButton from "./src/components/ChatButton";
import Login from "./src/pages/Login/Login";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginPage" component={Login} />
          <Stack.Screen name="BottomTabs" component={BottomNavigation} />
        </Stack.Navigator>
        <Toast />
      </View>
    </NavigationContainer>
  );
}
