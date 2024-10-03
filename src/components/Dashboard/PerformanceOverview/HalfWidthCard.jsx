// HalfWidthCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { spacing } from "../../../res/dimension";
import { fontSize, fontSize14, lineHeight } from "../../../res/theme/fonts";
import { styles } from "./halfWidthCard.style";

import GOAL_ICON from "../../../assets/PerformanceOverview/GOAL_ICON.svg";
import SHEILD_ICON from "../../../assets/PerformanceOverview/SHEILD_ICON.svg";
import MONEY_BAG_ICON from "../../../assets/PerformanceOverview/MONEY_BAG_ICON.svg";
import COMMISSION_ICON from "../../../assets/PerformanceOverview/COMMISSION_ICON.svg";
import PRICE_TAG_ICON from "../../../assets/PerformanceOverview/PRICE_TAG_ICON.svg";
import COIN_ICON from "../../../assets/PerformanceOverview/COIN_ICON.svg";
import UpSellOffers from "../../DashboardComponent/UpSellOffers";
import ProgressBar from "./ProgressBar";

const HalfWidthCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* <Image source={{ uri: data.icon }} style={styles.icon} /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {data.icon === "GOAL_ICON" ? (
          <GOAL_ICON />
        ) : data.icon === "SHEILD_ICON" ? (
          <SHEILD_ICON />
        ) : data.icon === "MONEY_BAG_ICON" ? (
          <MONEY_BAG_ICON />
        ) : (
          <COMMISSION_ICON />
        )}
        <Text style={styles.title}>{data.title}</Text>
      </View>
      {data.ammount && <Text style={styles.amount}>{data.ammount}</Text>}
      {data.progressTitle && (
        <Text style={styles.progress}>{data.progressTitle}</Text>
      )}
      {data.progressBarValue && (
        <ProgressBar percentage={data.progressBarValue} />
      )}
      {data.notificationTabDescription && (
        <UpSellOffers
          icon={
            data.notificationTabIcon === "PRICE_TAG_ICON" ? (
              <PRICE_TAG_ICON />
            ) : (
              <COIN_ICON />
            )
          }
          description={data.notificationTabDescription}
        />
      )}
      {data.notificationTabLinkDescription && (
        <Text style={styles.link}>{data.notificationTabLinkDescription}</Text>
      )}
    </View>
  );
};

export default HalfWidthCard;
