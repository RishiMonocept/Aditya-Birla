import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import formJsonData from "./formData.json";
import FormProgressHeader from "../../components/LeadsForm/FormProgressHeader";
import GenericButton from "../../components/ButtonsUIs/GenericButton";
import PickerInput from "../../components/TextInputUIs/PickerInput";
import GenericInput from "../../components/TextInputUIs/GenericInput";
const RenderInput = ({ item, onChange }) => {
  if (!item.visible) return null;
  const { type, label, value, name, options } = item;

  const handleChange = (text) => {
    onChange(name, text);
  };

  switch (type) {
    case "text":
      return (
        // {/* {item.visibleLabel && <Text>{label}</Text>} */}
        <GenericInput
          placeholder={label}
          value={value}
          onChangeText={handleChange}
        />
      );

    case "select":
      return (
        // {/* {item.visibleLabel && <Text>{label}</Text>} */}
        <PickerInput
          label={label}
          onValueChange={(item) => handleChange(item)}
          options={options}
          selectedValue={value}
        />
      );

    case "date":
      return (
        //{/* {item.visibleLabel && <Text>{label}</Text>} */}
        // <TextInput
        //   style={styles.textInput}
        //   value={value}
        //   onChangeText={handleChange}
        //   placeholder={label}
        //   placeholderTextColor={"#979CAE"}
        // />
        <GenericInput
          placeholder={label}
          value={value}
          onChangeText={handleChange}
        />
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FormProgressHeader />
      {/* <LeadsFormDetails /> */}
      <Text style={styles.title}>
        {formJsonData.formSections[0].sectionTitle}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 16, marginBottom: 36 }}>
          {formJsonData.formSections[0].formControls.map((item) => (
            <RenderInput
              key={item.name}
              item={{ ...item, value: formData[item.name] }}
              onChange={handleFormDataChange}
            />
          ))}
        </View>
      </ScrollView>
      <GenericButton title={"Continue"} />
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
    lineHeight: 17.6,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 16,
  },
});

export default LeadsForm;
