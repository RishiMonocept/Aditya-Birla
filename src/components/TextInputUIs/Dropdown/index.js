import React, { useState, useEffect, useRef } from "react";
import { View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./style";

const DropdownComponent = ({
  label,
  onValueChange,
  options,
  selectedValue,
  scrollOffset,
}) => {
  const [remainingHeight, setRemainingHeight] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const dropdownRef = useRef(null);
  const windowHeight = Dimensions.get("window").height;

  const calculateRemainingHeight = () => {
    dropdownRef.current?.measureInWindow((x, y, width, height) => {
      const dropdownBottom = y + height;

      const calculatedRemainingHeight = windowHeight - dropdownBottom;

      setRemainingHeight(Math.max(calculatedRemainingHeight, 0));
    });
  };

  useEffect(() => {
    calculateRemainingHeight();
  }, [scrollOffset]);

  return (
    <View style={styles.container} ref={dropdownRef}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        iconColor="#000"
        itemContainerStyle={styles.itemContainer}
        containerStyle={styles.containerStyle}
        data={options}
        maxHeight={180}
        labelField="name"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={label}
        value={selectedValue}
        dropdownPosition={remainingHeight < 180 ? "top" : "bottom"}
        inverted={false}
        autoScroll={false}
        onChange={(item) => {
          onValueChange(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
