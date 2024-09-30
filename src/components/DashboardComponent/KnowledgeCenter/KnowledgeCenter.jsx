import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { fontStyle } from "../../../res/theme/fonts";
import FORWARDRED_ICON from "../../../assets/Dashboard/forwardRedIcon.svg";
import KnowledgeCenterCard from "./KnowledgeCenterCard";
import IMAGE_ICON from "../../../assets/Dashboard/insuranceSellingImage.svg";

export default function KnowledgeCenter() {
  const KnowledgeCenterData = [
    {
      id: "1",
      title: "Insurance Selling\nMasterclass",
      btnText: "Resume",
      icon: <FORWARDRED_ICON />,
      imageIcon: <IMAGE_ICON />,
    },
    {
      id: "2",
      title: "Insurance Selling\nMasterclass",
      btnText: "Resume",
      icon: <FORWARDRED_ICON />,
      imageIcon: <IMAGE_ICON />,
    },
    {
        id: "3",
        title: "Insurance Selling\nMasterclass",
        btnText: "Resume",
        icon: <FORWARDRED_ICON />,
        imageIcon: <IMAGE_ICON />,
      },
  ];

  return (
    <View style={{ gap: 32 }}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={fontStyle.subHeading}>Knowledge Centre</Text>
        </View>
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}>Explore More</Text>
          <View>
            <FORWARDRED_ICON />
          </View>
        </View>
      </View>

      <View style={{ gap: 12 }}>
        <FlatList
          data={KnowledgeCenterData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <KnowledgeCenterCard
              imageIcon={item.imageIcon}
              title={item.title}
                btnText={item.btnText}
                icon={item.icon}
            />
          )}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        />
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
