import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";

const logo = require("../../assets/Birthday_Reminder.png");
const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardMainContainer}>
        <View style={styles.cardLogoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.cardDescContainer}>
          <View style={styles.cardDescContainer}>
            <Text style={styles.titleText}>Birthday Reminder</Text>
            <Text style={styles.dateText}>2024-08-13</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardMainContainer: {
    // flexDirection:'row',
    borderWidth: 1,

    borderRadius: 16,
    height: 72,
    width: 328,
    marginTop: 50,
    flexDirection: "row",
    backgroundColor: " #c7222",
    paddingLeft: 20,
    // gap: 24,
  },
  cardLogoContainer: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 40,
    borderRadius: 5,
  },
  cardDescContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    color: "#2E2E2E",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  dateText: {
    color: "#4c4f4f",
    fontSize: 12,
    fontWeight: "400",
    opacity: 1,
  },
});

export default Card;
