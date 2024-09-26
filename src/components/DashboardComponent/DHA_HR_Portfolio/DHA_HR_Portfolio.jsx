import { FlatList, Text, View } from "react-native";
import React from "react";
import { styles } from "./DHA_HR_Portfolio.style";
import { fontStyle } from "../../../res/theme/fonts";
import DHA_ICON from "../../../assets/Dashboard/DHA_ICON.svg";
import HR_ICON from "../../../assets/Dashboard/HR_ICON.svg";

export default function DHA_HR_Portfolio() {
  const subHeading = "DHA & HR Portfolio";
  const dhaHrPortfolioData = {
    subheading: "DHA_HR_Portfolio",
    data: [
      {
        icon: <DHA_ICON width={38} height={38} />,
        title: "Digital Health Assessments",
        value: "241",
        label: "Total Assessments",
        description: "Dummy placeholder text",
      },
      {
        icon: <HR_ICON width={38} height={38} />,
        title: "Health Returns",
        value: "₹50,000",
        label: "Users",
        description: "Nudge your users to actively participate to save more",
      },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>{item.icon}</View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={fontStyle.subHeading}>{subHeading}</Text>
      <FlatList
        data={dhaHrPortfolioData.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={styles.sliderContainer}
        horizontal
      />
    </View>
  );
}
