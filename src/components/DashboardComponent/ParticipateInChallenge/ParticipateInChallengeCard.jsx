import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../../../res/theme/colors";
import { borderRadius } from "../../../res/dimension";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";

export default function ParticipateInChallengeCard({
  heading,
  daysLeft,
  endingDate,
  icon,
  iconTitle,
  buttonText,
  leftImage,
}) {
  return (
    <View style={styles.cardContainer}>
      <Image source={leftImage} resizeMode="stretch" style={styles.leftImage} />

      <View style={styles.rightContainer}>
        <View style={{ gap: 4 }}>
          <View style={{ gap: 6 }}>
            <View style={styles.headingContainer}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.heading}>{iconTitle}</Text>
            </View>
            <Text style={styles.Mainheading}>{heading}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.reminders}>{daysLeft}</Text>
            <Text style={styles.endDate}>{endingDate}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 3,
    borderRadius: borderRadius.borderRadius12,
    backgroundColor: colors.primaryColors.white,
    borderColor: colors.primaryColors.white,
    gap: 3,
    flexDirection: "row",
    width: width * 0.9,
    marginHorizontal: 8,
  },

  rightContainer: {
    paddingHorizontal: 12,
    paddingVertical: 11,
    gap: 16,
  },
  leftImage: {
    width: 118,
    height: 175,
    borderTopLeftRadius: borderRadius.borderRadius12,
    borderBottomLeftRadius: borderRadius.borderRadius12,
  },
  headingContainer: {
    gap: 6,
    flexDirection: "row",
  },
  icon: {
    width: 16,
    height: 16,
  },
  heading: {
    fontSize: fontSize.font12,
    fontWeight: fontWeight.weight600,
    lineHeight: lineHeight.lineHeight16,
    color: "#4374d0",
  },
  Mainheading: {
    // borderWidth: 1,
    fontSize: fontSize.font16,
    fontWeight: fontWeight.weight700,
    lineHeight: lineHeight.lineHeight24,
  },
  reminders: {
    fontSize: fontSize.font12,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight13dot2,
    // fontWeight:"bold"
    color: colors.primaryColors.darkGray,
  },
  endDate: {
    fontSize: fontSize.font12,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight13dot2,
    fontWeight: "bold",
  },
  btnContainer: {
    paddingTop: 7,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    gap: 10,
    backgroundColor: "#FFE7E5",
    borderRadius: borderRadius.borderRadius8,
  },
  btnText: {
    fontSize: fontSize.font14,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight15dot4,
    color: colors.primaryColors.vibrantRed,
    alignSelf: "center",
  },
});
