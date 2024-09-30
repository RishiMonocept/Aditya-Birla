import { FlatList, Text, View } from "react-native";
import React from "react";
import { styles } from "./DHA_HR_Portfolio.style";
import { fontStyle } from "../../../res/theme/fonts";
import DHA_ICON from "../../../assets/Dashboard/DHA_ICON.svg";
import HR_ICON from "../../../assets/Dashboard/HR_ICON.svg";
import BULB_ICON from "../../../assets/Dashboard/bulb-icon.svg";
import RUPEE_ICON from "../../../assets/Dashboard/RUPEE_ICON.svg";
import UpSellOffers from "../UpSellOffers";
import dhaHrPortfolioData from "./dhaHrPortfolioData.json";

export default function DHA_HR_Portfolio() {
  const iconMapping = {
    DHA_ICON: <DHA_ICON />,
    HR_ICON: <HR_ICON />,
    BULB_ICON: <BULB_ICON />,
    RUPEE_ICON: <RUPEE_ICON />,
  };
  const subHeading = "DHA & HR Portfolio";

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetailsView}>
        <View style={{ gap: 16, flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            {iconMapping[item.icon]}
          </View>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        {item.title === "Health \nReturns" && (
          <Text style={{ lineHeight: 24, fontWeight: "700", fontSize: 22 }}>
            {item.value}
          </Text>
        )}
        {item.title === "Digital Health \nAssessments" && (
          <View style={{ gap: 16, flexDirection: "row" }}>
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
        icon={iconMapping[item.upSellOffer.icon]}
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
