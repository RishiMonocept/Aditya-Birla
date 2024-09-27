import { FlatList, Text, View } from "react-native";
import React from "react";
import { styles } from "./DHA_HR_Portfolio.style";
import { fontStyle } from "../../../res/theme/fonts";
import DHA_ICON from "../../../assets/Dashboard/DHA_ICON.svg";
import HR_ICON from "../../../assets/Dashboard/HR_ICON.svg";
import BULB_ICON from "../../../assets/Dashboard/bulb-icon.svg";
import RUPEE_ICON from "../../../assets/Dashboard/RUPEE_ICON.svg";
import UpSellOffers from "../UpSellOffers";

export default function DHA_HR_Portfolio() {
  const subHeading = "DHA & HR Portfolio";

  const dhaHrPortfolioData = [
    {
      icon: <DHA_ICON />,
      title: "Digital Health \nAssessments",
      value: [
        {
          amount: "241",
          label: "Total Assessments",
        },
        {
          amount: "199",
          label: "Users",
        },
      ],
      upSellOffer: {
        icon: <BULB_ICON />,
        description: "Dummy placeholder text",
      },
    },
    {
      icon: <HR_ICON />,
      title: "Health \nReturns",
      value: "₹50,000",
      upSellOffer: {
        icon: <RUPEE_ICON />,
        description: "Nudge your users to actively \nparticipate to save more",
      },
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetailsView}>
        <View style={{ gap: 16, flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>{item.icon}</View>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        {item.title === "Health \nReturns" && (
          <Text style={{ lineHeight: 24, fontWeight: "700", fontSize: 22 }}>
            {item.value}
          </Text>
        )}
        {item.title === "Digital Health \nAssessments" && (
          <View
            style={{
              gap: 16,
              flexDirection: "row",
            }}
          >
            {item.value.map((data, index) => (
              <View key={index} style={{ gap: 6 }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 22, lineHeight: 24.2 }}
                >
                  {data.amount}
                </Text>
                <Text
                  style={{ fontWeight: "400", fontSize: 14, lineHeight: 15.4 }}
                >
                  {data.label}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <UpSellOffers
        icon={item.upSellOffer.icon}
        description={item.upSellOffer.description}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={fontStyle.subHeading}>{subHeading}</Text>
      <FlatList
        data={dhaHrPortfolioData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        contentContainerStyle={{ gap: 12 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
