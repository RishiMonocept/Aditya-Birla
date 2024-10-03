import { View } from "react-native";
import React from "react";
import data from "../performanceOverviewData.json";
import HalfWidthCard from "../HalfWidthCard";
import FullWidthCard from "../FullWidthCard";
import { styles } from "./performanceCards.style";

const PerformanceCard = () => {
  return (
    <View style={styles.halfWidthContainer}>
      {data.map((item, index) => {
        if (index % 3 !== 0) {
          return <HalfWidthCard key={index} data={item} />;
        }
        return <FullWidthCard key={index} data={item} />;
      })}
    </View>
  );
};

export default PerformanceCard;
