import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 14,
    gap: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  holderDetails: {
    gap: 6,
  },
  holderNameRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  holderNameText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
  },
  holderRatingText: {
    fontSize: 10,
    lineHeight: 11,
    fontWeight: "400",
    color: "#797979",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 4,
  },
  productText: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "400",
    color: "#4C4C4C",
  },
  iconActionsContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  contentContainer: {
    gap: 16,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 16,
  },
  detailContainer: {
    width: 80,
    gap: 4,
  },
  detailLabel: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "400",
    color: "#4C4C4C",
  },
  detailValue: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "#4C4C4C",
  },
  premiumContainer: {
    width: 142,
    gap: 4,
  },
  modificationContainer: {
    gap: 4,
  },
  modificationText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownContainer: {
    gap: 6,
    width: 120,
  },
  breakdownTextLabel: {
    fontSize: 8,
    lineHeight: 8.8,
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownTextValue: {
    fontSize: 10,
    lineHeight: 11,
    fontWeight: "500",
    color: "#2E2E2E",
  },
  breakdownTextBenefit: {
    fontSize: 8,
    lineHeight: 8.8,
    fontWeight: "400",
    color: "#1F874C",
  },
  breakdownValueBenefit: {
    fontSize: 10,
    lineHeight: 11,
    fontWeight: "400",
    color: "#1F874C",
  },
  btmRow: {
    padding: 12,
    gap: 24,
    borderRadius: 8,
    backgroundColor: "#F2F6FE",
    flexDirection: "row",
  },
});
