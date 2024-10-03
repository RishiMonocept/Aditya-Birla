// FullWidthCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GaugeChart from "./GaugeChart";
import { styles } from "./fullWidthCard.style";
import UpSellOffers from "../../DashboardComponent/UpSellOffers";

// LOGOS
import GOAL_ICON from "../../../assets/PerformanceOverview/GOAL_ICON.svg";
import SHEILD_ICON from "../../../assets/PerformanceOverview/SHEILD_ICON.svg";
import MONEY_BAG_ICON from "../../../assets/PerformanceOverview/MONEY_BAG_ICON.svg";
import COMMISSION_ICON from "../../../assets/PerformanceOverview/COMMISSION_ICON.svg";
import PRO_SELLER from "../../../assets/PerformanceOverview/PRO_SELLER.svg";
import PRICE_TAG_ICON from "../../../assets/PerformanceOverview/PRICE_TAG_ICON.svg";
import COIN_ICON from "../../../assets/PerformanceOverview/COIN_ICON.svg";
import { TouchableOpacity } from "react-native";

const FullWidthCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* <Image source={{ uri: data.icon }} style={styles.icon} /> */}
      <View style={styles.iconTitleContainer}>
        {data.icon === "GOAL_ICON" ? (
          <GOAL_ICON />
        ) : data.icon === "SHEILD_ICON" ? (
          <SHEILD_ICON />
        ) : data.icon === "MONEY_BAG_ICON" ? (
          <MONEY_BAG_ICON />
        ) : (
          <COMMISSION_ICON />
        )}
        {/* <GOAL_ICON /> */}
        {/* <SvgUri uri={GOAL_ICON} /> */}
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </View>
      {data.isGaugeChart && (
        <View style={styles.gaugeChartContainer}>
          <GaugeChart
            value={50}
            maxValue={100}
            height={100}
            width={200}
            subtitle={"Achievement"}
          />
        </View>
      )}
      <View>
        {data.achievementTabTitle && (
          <View style={styles.achievementTab}>
            {data.achievementTabIcon === "PRO_SELLER" ? <PRO_SELLER /> : null}
            <Text style={styles.achievementTabTitle}>
              {data.achievementTabTitle}
            </Text>
          </View>
        )}
      </View>
      {data.ammount && <Text style={styles.ammount}>{data.ammount}</Text>}
      {data.progressTitle && (
        <Text style={styles.progress}>{data.progressTitle}</Text>
      )}
      {data.notificationTabDescription && (
        // <Text style={styles.notification}>
        //   {data.notificationTabDescription}
        // </Text>
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
        <TouchableOpacity style={{ width: "50%" }}>
          <Text style={styles.link}>{data.notificationTabLinkDescription}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FullWidthCard;
