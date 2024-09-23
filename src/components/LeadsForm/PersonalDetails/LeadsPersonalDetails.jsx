import { View, Text, ScrollView, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./LeadsPersonalDetails.style";
import GenericInput from "../../TextInputUIs/GenericInput";
import formJsonData from "../../../pages/Form/formData.json";
import PickerInput from "../../TextInputUIs/PickerInput";

export default function LeadsPersonalDetails() {
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
    <View style={styles.mainContainer}>
      <Text style={styles.formHeading}>
        {formJsonData.formSections[0].sectionTitle}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 16 }}>
          {formJsonData.formSections[0].formControls.map((item) => (
            <RenderInput
              key={item.name}
              item={{ ...item, value: formData[item.name] }}
              onChange={handleFormDataChange}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
