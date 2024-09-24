import React, { useState, useRef } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
  Animated,
  Vibration,
} from "react-native";
import formJsonData from "./formData.json";
import FormProgressHeader from "../../components/LeadsForm/FormProgressHeader";
import GenericButton from "../../components/ButtonsUIs/GenericButton";
import PickerInput from "../../components/TextInputUIs/PickerInput";
import GenericInput from "../../components/TextInputUIs/GenericInput";

const RenderInput = ({ item, onChange, shakeAnimation, hasError }) => {
  const { type, label, value, name, options, message } = item;

  if (!item.visible || !["text", "select", "date"].includes(type)) return null;

  const handleChange = (text) => onChange(name, text);

  const renderInputComponent = () => {
    switch (type) {
      case "text":
        return (
          <GenericInput
            placeholder={label}
            value={value}
            onChangeText={handleChange}
          />
        );
      case "date":
        return (
          <GenericInput
            placeholder={label}
            value={value}
            onChangeText={handleChange}
          />
        );
      case "select":
        return (
          <PickerInput
            label={label}
            onValueChange={(item) => handleChange(item)}
            options={options}
            selectedValue={value}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <View style={[styles.inputContainer, hasError && styles.errorBorder]}>
        {renderInputComponent()}
      </View>
      {hasError && <Text style={styles.errorText}>{message}</Text>}
    </Animated.View>
  );
};

const LeadsForm = () => {
  const [formData, setFormData] = useState(
    formJsonData.formSections[0].formControls.reduce((acc, control) => {
      if (
        ["text", "select", "date"].includes(control.type) &&
        control.visible
      ) {
        acc[control.name] = control.value || "";
      }
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleFormDataChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    if (errors[key]) {
      setErrors((prevErrors) => ({ ...prevErrors, [key]: false }));
    }
  };

  const triggerShakeAnimation = () => {
    Vibration.vibrate(500);
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSubmit = () => {
    const newErrors = formJsonData.formSections[0].formControls.reduce(
      (acc, item) => {
        if (
          ["text", "select", "date"].includes(item.type) &&
          item.visible &&
          item.validators?.some((validator) => validator.required) &&
          !formData[item.name]
        ) {
          acc[item.name] = true;
        }
        return acc;
      },
      {}
    );

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      triggerShakeAnimation();
      return;
    }

    console.log("Form submitted successfully", formData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FormProgressHeader />
      <Text style={styles.title}>
        {formJsonData.formSections[0].sectionTitle}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 16, marginBottom: 36 }}>
          {formJsonData.formSections[0].formControls.map((item, index) => (
            <RenderInput
              key={index}
              item={{
                ...item,
                value: formData[item.name],
                required: item.validators?.some(
                  (validator) => validator.required
                ),
                message: item.validators?.find(
                  (validator) => validator.required
                )?.message,
              }}
              onChange={handleFormDataChange}
              shakeAnimation={
                errors[item.name] ? shakeAnimation : new Animated.Value(0)
              }
              hasError={errors[item.name]}
            />
          ))}
        </View>
      </ScrollView>
      <GenericButton title={"Continue"} onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    lineHeight: 17.6,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 16,
  },
  inputContainer: {
    // Base input container styles
  },
  errorBorder: {
    // borderColor: "red",
    // borderWidth: 1,
  },
  errorText: {
    color: "#C7222A",
    fontSize: 12,
    marginTop: 4,
  },
});

export default LeadsForm;
