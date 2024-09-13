import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const icons = {
  birthday_reminder: require("../../assets/Birthday_Reminder.png"),
  new_lead_assignment: require("../../assets/New_Lead_Assignment.png"),
  proposal_payment_failed: require("../../assets/Proposal_Payment_Failed.png"),
  htmlmeter_product_release: require("../../assets/HTLMeter_Product_Release.png"),
  milestone_reached: require("../../assets/Milestone_Reached.png"),
};

const NotificationsCard = ({ item, length }) => {
  const icon = icons[item?.item?.icon] || icons.birthday_reminder; // default icon

  return (
    <View
      style={{
        ...styles.container,
        marginBottom: item?.item?.id === length ? 300 : null,
      }}
    >
      <View style={styles.cardMainContainer}>
        <View style={styles.cardLogoContainer}>
          <Image source={icon} style={styles.logo} />
        </View>

        <View style={styles.cardDescContainer}>
          <Text style={styles.titleText}>{item?.item?.title}</Text>
          <Text style={styles.dateText}>{item?.item?.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardMainContainer: {
    borderRadius: 16,
    height: 72,
    width: "100%",
    marginTop: 14,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 20,
  },

  cardLogoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 40,
    height: 40,
  },

  cardDescContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 6,
  },

  titleText: {
    color: "#2E2E2E",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },

  dateText: {
    color: "#4C4C4C",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
  },
});

export default NotificationsCard;
