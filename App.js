import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Home from "./src/pages/Home";
import Reports from "./src/pages/Reports";
import { useRef } from "react";
import BottomNavigation from "./src/components/BottomNavigation";
import ChatButton from "./src/components/ChatButton";
import Login from "./src/pages/Login/Login";
import Toast from "react-native-toast-message";
import LoginAdv from "./src/pages/LoginAdv/LoginAdv";
import LoginSearch from "./src/pages/LoginAdv/LoginSearch/LoginSearch";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { AnekLatin_400Regular } from "@expo-google-fonts/anek-latin";
import AllQuotes from "./src/pages/AllQuotes";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef(null);

  const [fontsLoaded] = useFonts({
    AnekLatin_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AdvLoginPage" component={LoginAdv} />
          <Stack.Screen name="BottomTabs" component={BottomNavigation} />
          <Stack.Screen name="LoginSearch" component={LoginSearch} />
          <Stack.Screen name="AllQuotes" component={AllQuotes} />
        </Stack.Navigator>
        <Toast />
      </View>
    </NavigationContainer>
  );
}
