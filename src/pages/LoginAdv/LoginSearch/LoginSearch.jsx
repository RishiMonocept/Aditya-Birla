import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomImage from "../BottomImage";
import BACK_ICON from "../../../assets/Login/login-back-icon.png";
import SEARCH_ICON from "../../../assets/Login/magnify.png";
import { styles } from "./LoginScreen.style";

const mobileNumbers = [
  "+91 9876543210",
  "+91 9123456789",
  "+91 9898989898",
  "+91 9000000000",
  "+91 9555555555",
  "+91 9191919191",
  "+91 9090909090",
  "+91 9222222222",
  "+91 9333333333",
  "+91 9444444444",
];

const emailAddresses = [
  "12!@gmail.com",
  "1234RRR@adityabirla.com",
  "rahul.a@adityabirla.com",
  "rahil.b@adityabirla.com",
  "rahman.c@adityabirla.com",
  "rahat.d@adityabirla.com",
  "ramesh.e@adityabirla.com",
  "rakhi.f@adityabirla.com",
  "rajesh.g@adityabirla.com",
  "rina.h@adityabirla.com",
  "rohit.i@adityabirla.com",
  "ram.j@adityabirla.com",
];

const LoginSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [flag, setFlag] = useState(false);
  const debounceTimeout = useRef(null);

  const handleSearch = (text) => {
    setSearchText(text);
    checkChar(text);
  };

  const checkChar = (text) => {
    const isEmail = /[a-zA-Z@._!#$%&'*+-/=?^_`{|}~]/.test(text);
    setFlag(isEmail);
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (searchText) {
        const filteredResults = !flag
          ? mobileNumbers
              .filter((item) => item.includes(searchText))
              .sort()
              .slice(0, 4)
          : emailAddresses
              .filter((item) => item.includes(searchText.toLowerCase()))
              .sort()
              .slice(0, 4);
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [searchText]);

  const handleSelect = (item) => {
    setSearchText(item);
    setSearchResults([]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <TouchableOpacity style={styles.backButton}>
                <Image source={BACK_ICON} style={styles.backIcon} />
              </TouchableOpacity>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Search contact</Text>
              </View>
            </View>
            <View>
              <View
                style={
                  searchResults.length === 0
                    ? styles.searchContainer
                    : {
                        ...styles.searchContainer,
                        borderRadius: 0,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }
                }
              >
                <TouchableOpacity>
                  <Image source={SEARCH_ICON} style={styles.searchIcon} />
                </TouchableOpacity>
                <TextInput
                  placeholder="Search mobile number or email address"
                  style={styles.searchInput}
                  keyboardType="visible-password"
                  placeholderTextColor="#797979"
                  value={searchText}
                  onChangeText={handleSearch}
                />
              </View>

              {searchResults.length > 0 && (
                <FlatList
                  data={searchResults}
                  renderItem={({ item }) => {
                    let firstFourChars, matchingPart, nonMatchingPart;
                    if (!flag) {
                      firstFourChars = item.slice(0, 4);
                      const restOfText = item.slice(4);
                      matchingPart = restOfText.startsWith(searchText)
                        ? restOfText.slice(0, searchText.length)
                        : "";
                      nonMatchingPart = restOfText.slice(matchingPart.length);
                    } else {
                      matchingPart = item.startsWith(searchText.toLowerCase())
                        ? item.slice(0, searchText.length)
                        : "";
                      nonMatchingPart = item.slice(matchingPart.length);
                    }

                    return (
                      <TouchableOpacity onPress={() => handleSelect(item)}>
                        <View style={styles.searchResultItem}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "500",
                              marginLeft: 10,
                            }}
                          >
                            {!flag && (
                              <Text style={{ color: "black" }}>
                                {firstFourChars}
                              </Text>
                            )}
                            <Text>
                              <Text style={{ color: "black" }}>
                                {matchingPart}
                              </Text>
                              <Text style={{ color: "#999" }}>
                                {nonMatchingPart}
                              </Text>
                            </Text>
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item}
                  style={styles.searchResultContainer}
                />
              )}
            </View>
          </View>
        </View>
        <BottomImage />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginSearch;
