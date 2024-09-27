import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { borderRadius, sizeWithoutScale, spacing } from "../../res/dimension";
import colors from "../../res/theme/colors";
import { fontSize, fontWeight, lineHeight } from "../../res/theme/fonts";
import { LinearGradient } from "expo-linear-gradient";
import UpSellOffers from "./UpSellOffers";

export default function AllTasksCard({
  name,
  profilePic,
  message,
  coinIcon,
  nextbtnicon,
  actionText,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.profileContainer}>
        <Image style={styles.profilePics} source={profilePic} />
        <Text style={styles.profileName}>{name}</Text>
      </View>

      <UpSellOffers icon={coinIcon} description={message} />

      <TouchableOpacity style={styles.actionContainer}>
        <Text style={styles.actionText}>{actionText}</Text>

        <Image
          style={styles.nextbtnicon}
          source={nextbtnicon}
          resizeMethod="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: spacing.space_m1,
    paddingHorizontal: spacing.space_m2,
    gap: spacing.space_m3,
    borderRadius: borderRadius.borderRadius16,
    borderWidth: 1,
    backgroundColor: colors.primaryColors.white,
    borderColor: colors.lightNeutrals.lightGray,
    shadowColor: "#5680B31F",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    // borderWidth:1
  },
  profileContainer: {
    flexDirection: "row",
    gap: spacing.space_base,
    // borderWidth: 1,
  },
  profilePics: {
    width: sizeWithoutScale.width18,
    height: sizeWithoutScale.height18,
    borderRadius: 9,
  },
  profileName: {
    fontSize: spacing.space_m3,
    lineHeight: lineHeight.lineHeight17dot6,
    fontWeight: fontWeight.weight700,
  },
  gradientBorder: {
    borderRadius: borderRadius.borderRadius10,
    padding: 0.5,
  },
  messageContainer: {
    paddingVertical: spacing.space_s3,
    paddingHorizontal: spacing.space_base,
    gap: spacing.space_10,
    borderRadius: borderRadius.borderRadius10,
    backgroundColor: "#fff4ce",
    flexDirection: "row",
    // alignItems:"center"
  },
  coinIcon: {
    width: 17.5,
    height: 17.5,
  },
  messageText: {
    fontSize: fontSize.font12,
    lineHeight: lineHeight.lineHeight16,
    fontWeight: fontWeight.weight400,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth:1,
    paddingRight: spacing.space_10,
  },
  actionText: {
    fontSize: fontSize.font14,
    fontWeight: fontWeight.weight500,
    lineHeight: lineHeight.lineHeight24,
    color: colors.primaryColors.vibrantRed,
  },
  nextbtnicon: {
    height: 8.33,
    width: 4.4,
    // borderWidth:
  },
});
