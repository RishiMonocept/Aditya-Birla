import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { styles } from "./LeadsPersonalDetails.style";
import GenericInput from "../../TextInputUIs/GenericInput";

export default function LeadsPersonalDetails() {
  // const placeholders = [
  //   "Name",
  //   "Email",
  //   "Phone Number",
  //   "Address",
  //   "City",
  //   "State",
  //   "Country",
  //   "Zip Code",
  //   "Username",
  //   "Password",
  //   "Website",
  //   "Company Name",
  //   "Job Title",
  //   "Department",
  //   "Social Security Number",
  //   "Date of Birth",
  //   "Gender",
  //   "Favorite Color",
  //   "Hobby",
  //   "Pet Name",
  // ];

  // const renderItem = ({ item }) => (
  //   <View style={{ marginBottom: 10 }}>
  //     <GenericInput placeholder={item} />
  //   </View>
  // );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.formHeading}>Personal Details</Text>
      {/* <ScrollView>
        {placeholders.map((placeholder, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <GenericInput placeholder={placeholder} />
          </View>
        ))}
      </ScrollView> */}
      {/* <FlatList
        data={placeholders}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      <GenericInput placeholder={"Name"} />
    </View>
  );
}
