import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import HITURGOAL_ICON from "../../../assets/Dashboard/HitGoal.svg";
import EARNBADGE_ICON from "../../../assets/Dashboard/EarnBadge.svg";
import PARTICIPATION_ICON from "../../../assets/Dashboard/Participation.svg";
import STEPS_ICON from "../../../assets/Dashboard/StepsInADay.svg";
import CALORIESBURN_ICON from "../../../assets/Dashboard/CaloriesBurn.svg";
import JUMPFORHEALTH_ICON from "../../../assets/Dashboard/JumpForHealth.png";
import COMPEET_ICON from "../../../assets/Dashboard/CompeteurPeer.svg";
import stepsIcon from "../../../assets/Dashboard/stepsPng.png"

import {
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
} from "../../../res/theme/fonts";
import colors from "../../../res/theme/colors";
import { spacing } from "../../../res/dimension";
import ParticipateInChallengeCard from "./ParticipateInChallengeCard";

// JSON data with icon names as strings
const ParticipationChallengeData = [
  {
    id: "1",
    heading: "Join the steps challenges\n& win an iPhone 13",
    daysLeft: "05 days left . Ending on ",
    endingDate: "29th Jun’ 24",
    icon: "PARTICIPATION_ICON",
    leftimage: stepsIcon,
    iconTitle: "Total 34,000 Participants",
    buttonText: "Get Offer Now",
  },
  {
    id: "2",
    heading: "Join the Calorie Burn\nchallenges",
    daysLeft: "02 days left . Ending on ",
    endingDate: "15th Jul’ 24",
    icon: "PARTICIPATION_ICON",
    leftimage: stepsIcon,
    iconTitle: "Total 34,000 Participants",
    buttonText: "Shop Now",
  },
  {
    id: "3",
    heading: "Join the Jumps challenges\n& win a 2 Day Trip",
    daysLeft: "10 days left . Ending on ",
    endingDate: "20th Aug’ 24",
    icon: "PARTICIPATION_ICON",
    leftimage: stepsIcon,
    iconTitle: "Total 34,000 Participants",
    buttonText: "Explore Deals",
  },
];

// Icon mapping
const iconMapping = {
  PARTICIPATION_ICON: <PARTICIPATION_ICON />,
  STEPS_ICON: <STEPS_ICON />,
  CALORIESBURN_ICON: <CALORIESBURN_ICON />,
  JUMPFORHEALTH_ICON: <JUMPFORHEALTH_ICON />,
};

export default function ParticipateInChallengeTo() {
  return (
    <View style={{ gap: 32 }}>
      <View style={styles.headingContainer}>
        <Text style={fontStyle.subHeading}>Participate in challenge to</Text>
      </View>
      <View style={{ gap: 2, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={styles.awardContainer}>
          <HITURGOAL_ICON style={styles.icon} />
          <Text style={styles.iconText}>Hit your daily goal</Text>
        </View>
        <View style={styles.awardContainer}>
          <COMPEET_ICON style={styles.icon} />
          <Text style={styles.iconText}>Compete with peers</Text>
        </View>
        <View style={styles.awardContainer}>
          <EARNBADGE_ICON style={styles.icon} />
          <Text style={styles.iconText}>Earn badges</Text>
        </View>
      </View>

      <FlatList
        data={ParticipationChallengeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ParticipateInChallengeCard
            heading={item.heading}
            daysLeft={item.daysLeft}
            endingDate={item.endingDate}
            icon={iconMapping[item.icon]} 
            leftImage={item.leftimage} 
            iconTitle={item.iconTitle}
            buttonText={item.buttonText}
          />
        )}
        // horizontal={true}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width:16}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  awardContainer: {
    paddingVertical: 7,
    paddingRight: 12,
    paddingLeft: 7,
    gap: 6,
    borderRadius: 68,
    flexDirection: "row",
  },
  iconText: {
    fontWeight: fontWeight.weight500,
    fontSize: fontSize.font12,
    lineheight: lineHeight.lineHeight16,
    color: colors.primaryColors.darkGray,
  },
  icon: {
    height: spacing.space_m3,
    width: spacing.space_m3,
  },
});
