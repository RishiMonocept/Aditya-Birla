import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(16),
    paddingTop: verticalScale(12),
    paddingHorizontal: scale(12),
    paddingBottom: verticalScale(14),
    gap: verticalScale(24),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  holderDetails: {
    gap: verticalScale(6),
  },
  holderNameRow: {
    flexDirection: "row",
    gap: scale(8),
    alignItems: "center",
  },
  holderNameText: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    fontWeight: "600",
  },
  holderRatingText: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(11),
    fontWeight: "400",
    color: "#797979",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: scale(4),
  },
  productText: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(12),
    fontWeight: "400",
    color: "#4C4C4C",
  },
  iconActionsContainer: {
    flexDirection: "row",
    gap: scale(8),
    alignItems: "center",
  },
  contentContainer: {
    gap: verticalScale(16),
  },
  rowContainer: {
    flexDirection: "row",
  },
  detailContainer: {
    width: scale(80),
    gap: verticalScale(4),
  },
  detailLabel: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
    fontWeight: "400",
    color: "#4C4C4C",
  },
  detailValue: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    fontWeight: "600",
    color: "#4C4C4C",
  },
  premiumContainer: {
    width: scale(142),
    gap: verticalScale(4),
  },
  modificationContainer: {
    gap: verticalScale(4),
  },
  modificationText: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(14),
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownContainer: {
    gap: verticalScale(6),
    width: scale(120),
  },
  breakdownTextLabel: {
    fontSize: moderateScale(8),
    lineHeight: moderateScale(8.8),
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownTextValue: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(11),
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownTextBenefit: {
    fontSize: moderateScale(8),
    lineHeight: moderateScale(8.8),
    fontWeight: "400",
    color: "#1F874C",
  },
  breakdownValueBenefit: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(11),
    fontWeight: "400",
    color: "#1F874C",
  },
  btmRow: {
    padding: verticalScale(12),
    gap: verticalScale(24),
    borderRadius: moderateScale(8),
    backgroundColor: "#F2F6FE",
    flexDirection: "row",
  },
  modifiedLabel: {
    backgroundColor: "#8CACE7",
    paddingHorizontal: scale(12),
    gap: scale(10),
    borderRadius: moderateScale(19),
    position: "absolute",
    left: scale(12.33),
    marginTop: verticalScale(-8),
  },
  modifiedText: {
    color: "#ffffff",
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
    fontWeight: "500",
  },
});
