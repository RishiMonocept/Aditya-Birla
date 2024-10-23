import React, { useState, useRef, useEffect } from "react";
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
  FlatList,
} from "react-native";
// import formJsonData from "./formData.json";
import FormProgressHeader from "../../components/LeadsForm/FormProgressHeader";
import GenericButton from "../../components/ButtonsUIs/GenericButton";
import PickerInput from "../../components/TextInputUIs/PickerInput";
import GenericInput from "../../components/TextInputUIs/GenericInput";
import Toast from "react-native-toast-message";
import Header from "../../components/Header/Header";
import DateInput from "../../components/TextInputUIs/DateInput";
import CheckBoxInput from "../../components/TextInputUIs/CheckBoxInput";
import DropdownComponent from "../../components/TextInputUIs/Dropdown";

const RenderInput = ({
  item,
  onChange,
  shakeAnimation,
  hasError,
  scrollOffset,
}) => {
  const { type, label, value, name, options, message } = item;
  const [idTypeData, setIdTypeData] = useState([]);
  const [proposerOccupationData, setProposerOccupationData] = useState([]);
  const [educationTypeData, setEducationTypeData] = useState([]);
  const [maritalStatusData, setMaritalStatusData] = useState([]);
  // const [apiData, setApiData] = useState({});

  if (
    !item.visible ||
    !["text", "select", "date", "email", "phonenumber", "idnumber"].includes(
      type
    )
  )
    return null;

  const handleChange = (text) => onChange(name, text);

  const getData = async () => {
    try {
      const idTypeResponse = await fetch("https://usp.monocept.ai/yatra/getId");
      const idTypeJson = await idTypeResponse.json();
      setIdTypeData(idTypeJson);

      const proposerOccupationResponse = await fetch(
        "https://usp.monocept.ai/yatra/getProposerOccupation"
      );
      const proposerOccupationJson = await proposerOccupationResponse.json();
      setProposerOccupationData(proposerOccupationJson);

      const educationTypeResponse = await fetch(
        "https://usp.monocept.ai/yatra/getEducationType"
      );
      const educationTypeJson = await educationTypeResponse.json();
      setEducationTypeData(educationTypeJson);

      const maritalStatusResponse = await fetch(
        "https://usp.monocept.ai/yatra/getMaritalStatus"
      );
      const maritalStatusJson = await maritalStatusResponse.json();
      setMaritalStatusData(maritalStatusJson);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getOptions = () => {
    switch (label) {
      case "ID Type":
        return idTypeData?.IdType || [];

      case "Occupation":
        return proposerOccupationData?.ProposerOccupation || [];

      case "Marital Status":
        return maritalStatusData?.MaritalStatus || [];

      case "Education":
        return educationTypeData?.EducationType || [];

      default:
        return options || [];
    }
  };

  const renderInputComponent = () => {
    switch (type) {
      case "text":
      case "email":
      case "phonenumber":
      case "idnumber":
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
          // <PickerInput
          //   label={label}
          //   onValueChange={(item) => handleChange(item)}
          //   options={getOptions()}
          //   selectedValue={value}
          // />
          <DropdownComponent
            label={label}
            onValueChange={(item) => handleChange(item)}
            options={getOptions()}
            selectedValue={value}
            scrollOffset={scrollOffset}
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

export default function LeadsForm({ isVisible, onClose, formJsonData }) {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState(
    formJsonData.formSections[formIndex].formControls.reduce((acc, control) => {
      if (
        ["text", "select", "date", "email", "phonenumber", "idnumber"].includes(
          control.type
        ) &&
        control.visible
      ) {
        acc[control.name] = control.value || "";
      }
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [formMemberData, setFormMemberData] = useState(null);
  const [policyType, setPolicyType] = useState("Multi Individual");
  const [checkedStates, setCheckedStates] = useState([]);

  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.y;
    setScrollOffset(offset);
  };

  const handleFormDataChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    console.log(formData);
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
    const newErrors = formJsonData.formSections[formIndex].formControls.reduce(
      (acc, item) => {
        const { name, type, validators, visible } = item;

        if (
          ![
            "text",
            "select",
            "date",
            "email",
            "phonenumber",
            "idnumber",
          ].includes(type) ||
          !visible
        )
          return acc;

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

  const fetchMemberDetailsData = async () => {
    const url = "https://usp.monocept.ai/yatra/api/getproposerrelationships";
    const bodyData = {
      policyType: policyType,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonResponse = await response.json();

      if (jsonResponse.success) {
        setFormMemberData(jsonResponse.data.relationShip);
      } else {
        throw new Error("API call failed, no valid data received");
      }
    } catch (err) {
      setFormMemberData(null);
    }
  };

  const handleCheckBoxChange = (index) => {
    setCheckedStates((prevCheckedStates) => {
      const updatedCheckedStates = [...prevCheckedStates];
      updatedCheckedStates[index] = !prevCheckedStates[index];
      return updatedCheckedStates;
    });
  };

  const handleAddMore = () => {
    console.log("Checked States: ", checkedStates);
    // if (formMemberData && formMemberData.length > 0) {
    //   setCheckedStates(new Array(formMemberData.length).fill(false));
    // }
  };

  const renderMemberDetailsItem = (item, index) => (
    <View key={item.id} style={{ marginVertical: 8 }}>
      <CheckBoxInput
        checked={checkedStates[index]}
        setChecked={() => handleCheckBoxChange(index)}
        item={item}
      />
    </View>
  );

  //REVIEW : It works, but might be wrong
  useEffect(() => {
    // console.log("fetched form data ------>", formMemberData);
    if (formMemberData && formMemberData.length > 0) {
      setCheckedStates(new Array(formMemberData.length).fill(false));
    }
  }, [formMemberData]);

  //REVIEW : It works, but might be wrong
  useEffect(() => {
    fetchMemberDetailsData();
  }, []);

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
          <>
            {/* <FlatList
              data={formMemberData}
              keyExtractor={(item) => item.id}
              renderItem={renderMemberDetailsItem}
            /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {formMemberData.map((item, index) =>
                renderMemberDetailsItem(item, index)
              )}
            </ScrollView>
          </>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={{ gap: 16, marginBottom: 36 }}>
            {formJsonData.formSections[formIndex].formControls.map(
              (item, index) => {
                const isVisible = item?.visible;
                const value = formData[item.name];
                const isRequired = item.validators?.some(
                  (validator) => validator.required
                );
                const errorMessage =
                  errors[item.name]?.message ||
                  item.validators?.find((v) => v.required)?.message;
                const hasError = errors[item.name];
                const shakeAnim = hasError
                  ? shakeAnimation
                  : new Animated.Value(0);

                return (
                  isVisible && (
                    <RenderInput
                      key={index}
                      item={{
                        ...item,
                        value,
                        required: isRequired,
                        message: errorMessage,
                      }}
                      onChange={handleFormDataChange}
                      shakeAnimation={shakeAnim}
                      hasError={hasError}
                      scrollOffset={scrollOffset}
                    />
                  )
                );
              }
            )}
          </View>
        </ScrollView>
        {formJsonData?.formSections[formIndex]?.sectionTitle ===
          "Insured Member Details" && (
          <GenericButton
            title={"+ Add More"}
            onPress={handleAddMore}
            backgroundColor="#F1F3F6"
            textColor="#000000"
          />
        )}

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
