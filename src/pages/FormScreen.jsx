import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./home.style";
import { StatusBar } from "expo-status-bar";
import LeadsForm from "./Form/LeadsForm";
import GenericButton from "../components/ButtonsUIs/GenericButton";

const FormScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  const fetchFormData = async () => {
    const url = "https://usp.monocept.ai/yatra/api/getform";
    const bodyData = {
      partnerId: 1,
      productId: 1,
      formId: 1,
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
        setFormData(jsonResponse.data); // Store the form data in the state
        setError(null); // Reset any previous errors
      } else {
        throw new Error("API call failed, no valid data received");
      }
    } catch (err) {
      setError(err.message); // Store the error message
      setFormData(null); // Reset formData on error
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <SafeAreaView style={styles.safeAreaView}>
          <Header title={"Proposal"} />
          <StatusBar style="dark" />
          <GenericButton
            title={"Leads Form"}
            onPress={() => {
              setModalVisible(true);
              fetchFormData(); // Fetch form data when the button is pressed
            }}
          />
          {error && <Text style={styles.errorText}>Error: {error}</Text>}
          {formData && (
            <LeadsForm
              isVisible={modalVisible}
              onClose={() => setModalVisible(false)}
              formJsonData={JSON.parse(formData.jsonFormData)} // Pass parsed form data
            />
          )}
          {!formData && !error && <Text>Loading...</Text>}

          {/* Uncomment to display error or form data */}
          {/* <View>
            {error && <Text>Error: {error}</Text>}
            {formData ? (
              <View>
                <Text>
                  Form Title: {JSON.parse(formData.jsonFormData).formTitle}
                </Text>
              </View>
            ) : (
              <Text>Loading...</Text>
            )}
          </View> */}
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormScreen;
