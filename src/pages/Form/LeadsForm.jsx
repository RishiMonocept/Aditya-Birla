import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import formJsonData from "./formData.json";
import { Picker } from "@react-native-picker/picker";
import { fontSize14 } from "../../res/theme/fonts";

const RenderInput = ({ item, onChange }) => {
  if (!item.visible) return null;
  const { type, label, value, name, options } = item;

  const handleChange = (text) => {
    onChange(name, text);
  };

  switch (type) {
    case "text":
      return (
        <View style={styles.inputContainer}>
          {/* {item.visibleLabel && <Text>{label}</Text>} */}
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={handleChange}
            placeholder={label}
            placeholderTextColor={"#979CAE"}
          />
        </View>
      );

    case "select":
      return (
        <View style={styles.inputContainer}>
          {/* {item.visibleLabel && <Text>{label}</Text>} */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value}
              dropdownIconRippleColor={"#ccc"}
              onValueChange={(item) => handleChange(item)}
              style={styles.picker}
              // pickerStyleType=""
            >
              {options.map((option) => (
                // console.log(option),
                <Picker.Item
                  key={option.value}
                  label={option.name}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      );

    case "date":
      return (
        <View style={styles.inputContainer}>
          {/* {item.visibleLabel && <Text>{label}</Text>} */}
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={handleChange}
            placeholder={label}
            placeholderTextColor={"#979CAE"}
          />
        </View>
      );

    default:
      return null;
  }
};

const LeadsForm = () => {
  const [formData, setFormData] = useState(
    formJsonData.formSections[0].formControls.reduce((acc, control) => {
      acc[control.name] = control.value || "";
      return acc;
    }, {})
  );

  const handleFormDataChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // console.log(formData);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>
        {formJsonData.formSections[0].sectionTitle}
      </Text>
      <FlatList
        data={formJsonData.formSections[0].formControls}
        renderItem={({ item }) =>
          item.visible && (
            <RenderInput
              item={{ ...item, value: formData[item.name] }}
              onChange={handleFormDataChange}
            />
          )
        }
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize14,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  textInput: {
    // borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f1f3f6",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  pickerContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  picker: {
    borderWidth: 1,
    // borderColor: "#ccc",
    backgroundColor: "#f1f3f6",
  },
});

export default LeadsForm;
