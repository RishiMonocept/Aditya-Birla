import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function AsEmplayee({ setInputNum }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState("");

  // Capture the search result when navigating back from LoginSearch
  useEffect(() => {
    if (route.params?.selectedContact) {
      setSearchText(route.params.selectedContact);
      setInputNum(route.params.selectedContact);
    }
  }, [route.params?.selectedContact]);

  const handleSearchNavigation = () => {
    console.log("Navigating to LoginSearch");
    navigation.navigate("LoginSearch");
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Enter mobile number or email address"
        placeholderTextColor="#797979"
        style={styles.input}
        value={searchText} // Display the selected search text
        onChangeText={setSearchText}
      />

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Enter the mobile number or{"\n"}email address to receive the OTP.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={handleSearchNavigation}
          >
            <Text style={styles.searchMobNum}>Search Mobile Number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
  },
  input: {
    width: "100%",
    borderColor: "#F1F3F6",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 6,
    paddingRight: 16,
  },
  text: {
    fontSize: 11.5,
    lineHeight: 17,
    fontWeight: "500",
    color: "#2E2E2E",
  },
  container: {
    flexDirection: "row",
  },
  searchMobNum: {
    fontSize: 11.5,
    fontWeight: "500",
    color: "#C7222A",
  },
  searchbtn: {
    paddingTop: 10,
    paddingLeft: 25,
  },
});
