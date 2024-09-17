// Search.js
import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Dimensions,
} from "react-native";
import SEARCH from "../../assets/Search/SearchIcon.png";
import FILTER from "../../assets/Search/FilterIcon.png";
import { styles } from "./search.style";

const Search = () => {
  const inputRef = useRef(null);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.searchIcon} source={SEARCH} />
      <TextInput
        ref={inputRef}
        style={styles.inputField}
        placeholder="Find Something"
        placeholderTextColor="#797979"
        onFocus={() =>
          Keyboard.addListener("keyboardDidShow", () => {
            // Adjust component when keyboard is shown
          })
        }
        onEndEditing={() => Keyboard.dismiss()}
      />
      <TouchableOpacity>
        <Image source={FILTER} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
