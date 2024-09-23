import { View, Text } from "react-native";
import React from "react";
import FormProgressHeader from "../../components/LeadsForm/FormProgressHeader";
import GenericButton from "../../components/ButtonsUIs/GenericButton";
import LeadsFormDetails from "../../components/LeadsForm/LeadsFormDetails";

export default function LeadsForm() {
  return (
    <View style={{ borderWidth: 1 }}>
      <FormProgressHeader />
      <LeadsFormDetails />
      <GenericButton title={"Continue"} />
    </View>
  );
}
