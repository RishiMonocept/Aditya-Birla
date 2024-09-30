import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { fontStyle } from "../../../res/theme/fonts";
import FORWARDRED_ICON from "../../../assets/Dashboard/forwardRedIcon.svg"

export default function KnowledgeCenter() {
  return (
    <View style={{gap:32}}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={fontStyle.subHeading}>Knowledge Centre</Text>
        </View>
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}>Explore More</Text>
          <View>
            <FORWARDRED_ICON/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    // top: 18,
    paddingTop: 18,
  },
  titleContainer: {
    // borderWidth: 1,
    width: "62%",
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  exploreContainer: {
    // borderWidth: 1,
    width: "34%",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  exploreText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: "#C7222A",
  },
  exploreIcon: {
    width: 6.67,
    width: 4.3,
  },
});
