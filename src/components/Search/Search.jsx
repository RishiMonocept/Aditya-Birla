import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./search.style";
import SEARCH from "../../assets/Search/SearchIcon.png";
import FILTER from "../../assets/Search/FilterIcon.png";

const Search = () => {
  const inputRef = useRef(null);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.searchIcon} source={SEARCH} />
      <TextInput
        ref={inputRef}
        style={styles.inputField}
        // onEndEditing={() => Keyboard.dismiss()}
      />
      <Text style={styles.placeholderText}>Find Something</Text>
      <TouchableOpacity>
        <Image source={FILTER} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
