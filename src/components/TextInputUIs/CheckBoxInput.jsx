import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CHECKED_ICON from "../../assets/AllQuotes/Checked.svg";
import DELETE_ICON from "../../assets/Forms/delete_icon.svg";
import { spacingModerateScale, spacingScale } from "../../res/ScaledSheet";
import { styles } from "./styles/CheckBoxInput.styles";

export default function CheckBoxInput({ checked, setChecked, item }) {
  const [age, setAge] = useState("");

  const handlePress = () => {
    setChecked(!checked);
  };

  const handleTextChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setAge(numericText.slice(0, 3));
  };

  return (
    <View style={styles.memberDetailContainer}>
      <View
        style={{
          // borderWidth: 1,
          flexDirection: "row",
          gap: spacingScale.base,
          alignItems: "center",
          width: spacingScale.space_194,
        }}
      >
        <TouchableOpacity
          style={[
            styles.checkboxContainer,
            {
              borderColor: checked ? "#2E2E2E" : null,
              borderWidth: checked ? 0 : 1,
              borderRadius: checked ? 0 : spacingModerateScale.s2,
            },
          ]}
          onPress={handlePress}
        >
          {checked && <CHECKED_ICON />}
        </TouchableOpacity>
        <View style={styles.profileImage}>
          {/* <Image source={require(item.imagePath)} /> */}
        </View>

        <Text style={styles.filterText}>{item.name}</Text>
      </View>

      {checked && (
        <View style={styles.deleteContainer}>
          <TextInput
            placeholder="Enter Age"
            style={styles.textInputContainer}
            value={age}
            maxLength={3}
            keyboardType="numeric"
            autoCapitalize="characters"
            onChangeText={handleTextChange}
          />
          <TouchableOpacity onPress={() => setAge("")}>
            <DELETE_ICON />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
