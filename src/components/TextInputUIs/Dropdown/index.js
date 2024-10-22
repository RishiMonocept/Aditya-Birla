import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./style";

const DropdownComponent = ({
  label,
  onValueChange,
  options,
  selectedValue,
}) => {
  //   const renderLabel = () => {
  //     if (value || isFocus) {
  //       return (
  //         <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //           Dropdown label
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        iconColor="#000"
        itemContainerStyle={styles.itemContainer}
        containerStyle={styles.containerStyle}
        data={options}
        maxHeight={250}
        labelField="name"
        valueField="value"
        placeholder={label}
        value={selectedValue}
        onChange={(item) => {
          onValueChange(item.value);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
