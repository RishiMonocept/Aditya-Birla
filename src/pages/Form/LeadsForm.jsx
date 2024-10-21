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
  Modal,
  TouchableOpacity,
} from "react-native";
// import formJsonData from "./formData.json";
import FormProgressHeader from "../../components/LeadsForm/FormProgressHeader";
import GenericButton from "../../components/ButtonsUIs/GenericButton";
import PickerInput from "../../components/TextInputUIs/PickerInput";
import GenericInput from "../../components/TextInputUIs/GenericInput";
import Toast from "react-native-toast-message";
import Header from "../../components/Header/Header";
import DateInput from "../../components/TextInputUIs/DateInput";

export default function LeadsForm({ isVisible, onClose, formJsonData }) {
  const [formIndex, setFormIndex] = useState(0);

  const [formData, setFormData] = useState(
    formJsonData.formSections[formIndex].formControls.reduce((acc, control) => {
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

  const RenderInput = ({ item, onChange, shakeAnimation, hasError }) => {
    const { type, label, value, name, options, message } = item;
    // console.log(type);

    // if (!item.visible) return null;
    /**
     * We want:
     * 1. agr text and date ke lava koi aur type hai => not print the field
     * 2. agr visible field false hai => not print the field
     *
     */

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
            <DateInput
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
        {renderInputComponent()}
        {hasError && <Text style={styles.errorText}>{message}</Text>}
      </Animated.View>
    );
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
    const newErrors = formJsonData.formSections[formIndex].formControls.reduce(
      (acc, item) => {
        const { name, type, validators, visible } = item;

        if (!["text", "select", "date"].includes(type) || !visible) return acc;

        const requiredValidator = validators?.find((v) => v.required);
        if (requiredValidator && !formData[name]) {
          acc[name] = {
            message: requiredValidator.message,
          };
          return acc;
        }

        const patternValidator = validators?.find((v) => v.pattern);
        if (
          patternValidator &&
          formData[name] &&
          !new RegExp(patternValidator.pattern).test(formData[name])
        ) {
          acc[name] = {
            message: patternValidator.message || "Invalid format.",
          };
        }

        return acc;
      },
      {}
    );

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   triggerShakeAnimation();
    //   return;
    // }

    if (formIndex < formJsonData?.formSections.length - 1) {
      setFormIndex((prev) => prev + 1);
    } else {
      console.log("Form submitted successfully", formData);
      Toast.show({
        type: "success",
        position: "top",
        text1: "Submitted Successfully",
        visibilityTime: 3000,
      });
      setFormData(
        formJsonData.formSections[formIndex].formControls.reduce(
          (acc, control) => {
            if (
              ["text", "select", "date"].includes(control.type) &&
              control.visible
            ) {
              acc[control.name] = control.value || "";
            }
            return acc;
          },
          {}
        )
      );
      setFormIndex(0);
      onClose();
    }
  };
  // console.log("--->", formJsonData.formSections[0].formControls);
  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title={"Proposal"} onPress={onClose} />
        <FormProgressHeader />
        <Text style={styles.title}>
          {formJsonData?.formSections[formIndex]?.sectionTitle}
        </Text>
        {formJsonData?.formSections[formIndex]?.sectionTitle ===
          "Insured Member Details" && (
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              padding: 200,
              borderColor: "#3d3838",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black" }}>Hello</Text>
          </View>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ gap: 16, marginBottom: 36 }}>
            {formJsonData.formSections[formIndex].formControls.map(
              (item, index) => {
                return (
                  item?.visible && (
                    <RenderInput
                      key={index}
                      item={{
                        ...item,
                        value: formData[item.name],
                        required: item.validators?.some(
                          (validator) => validator.required
                        ),
                        message:
                          errors[item.name]?.message ||
                          item.validators?.find((v) => v.required)?.message,
                      }}
                      onChange={handleFormDataChange}
                      shakeAnimation={
                        errors[item.name]
                          ? shakeAnimation
                          : new Animated.Value(0)
                      }
                      hasError={errors[item.name]}
                    />
                  )
                );
              }
            )}
          </View>
        </ScrollView>
        <GenericButton title={"Continue"} onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 14,
    marginHorizontal: 16,
  },
  title: {
    lineHeight: 17.6,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 16,
  },
  errorText: {
    color: "#C7222A",
    fontSize: 12,
    marginTop: 4,
  },
  closeButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#C7222A",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
