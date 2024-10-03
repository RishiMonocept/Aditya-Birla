import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import colors from "../../res/theme/colors";
import {
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
} from "../../res/theme/fonts";
import taskPeding from "../../assets/Dashboard/taskPending.png";
import { borderRadius, spacing } from "../../res/dimension";
import profilePic from "../../assets/Dashboard/profilePic.png";
import RUPEE_ICON from "../../assets/Dashboard/RUPEE_ICON.svg";
import exploreMore from "../../assets/Dashboard/ExploreMorebtn.png";
import AllTasksCard from "./AllTasksCard";

export default function AllTasks() {
  const importantTasksData = [
    {
      id: "1",
      name: "Rohini Pandey",
      profilePic: profilePic,
      message:
        "Your customer's payment had\nfailed! Get them to retry\npayment.",
      actionText: "Resend payment link to Rohini",
      coin: <RUPEE_ICON />,
      nextIcon: exploreMore,
    },
    {
      id: "2",
      name: "Rohini Pandey",
      profilePic: profilePic,
      message:
        "Your customer's payment had\nfailed! Get them to retry\npayment.",
      actionText: "Resend payment link to Rohini",
      coin: <RUPEE_ICON />,
      nextIcon: exploreMore,
    },
    {
      id: "3",
      name: "Rohini Pandey",
      profilePic: profilePic,
      message:
        "Your customer's payment had\nfailed! Get them to retry\npayment.",
      actionText: "Resend payment link to Rohini",
      coin: <RUPEE_ICON />,
      nextIcon: exploreMore,
    },
    {
      id: "4",
      name: "Rohini Pandey",
      profilePic: profilePic,
      message:
        "Your customer's payment had\nfailed! Get them to retry\npayment.",
      actionText: "Resend payment link to Rohini",
      coin: <RUPEE_ICON />,
      nextIcon: exploreMore,
    },
    // Add more tasks here if needed
  ];

  return (
    <View style={styles.AllTasksContainer}>
      <View style={styles.headingandpending}>
        <Text style={fontStyle.subHeading}>All Tasks</Text>
        <View style={styles.pendingTaskcontainer}>
          <Image
            style={{ height: 20, width: 20 }}
            source={taskPeding}
            resizeMethod="contain"
          />
          <Text style={styles.pendingtaskText}>Tasks Pending</Text>
        </View>
      </View>

      <FlatList
        // style={{marginLeft:-16}}
        data={importantTasksData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AllTasksCard
            name={item.name}
            profilePic={item.profilePic}
            coinIcon={item.coin}
            message={item.message}
            nextbtnicon={item.nextIcon}
            actionText={item.actionText}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  AllTasksContainer: {
    gap: spacing.space_l2,

    // borderWidth:1,
    // marginRight:-16,
    // paddingRight:16
  },
  headingandpending: {
    gap: spacing.space_m1,
    // borderWidth:1
  },
  headingText: {
    fontSize: fontSize.font24,
    lineHeight: lineHeight.lineHeight28dot8,
    fontWeight: fontWeight.weight700,
    color: colors.primaryColors.black,
  },
  pendingTaskcontainer: {
    paddingVertical: spacing.space_s2,
    paddingHorizontal: spacing.space_m1,
    gap: spacing.space_s2,
    backgroundColor: colors.primaryColors.lingtShadeBlue,
    flexDirection: "row",
    borderRadius: borderRadius.borderRadius20,
    alignItems: "center",
    width: "50%",
  },
  pendingtaskText: {
    fontSize: fontSize.font14,
    lineHeight: lineHeight.lineHeight24,
    fontWeight: fontWeight.weight400,
  },
});
