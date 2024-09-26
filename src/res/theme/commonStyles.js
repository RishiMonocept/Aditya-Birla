import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  tabsContainer: {
    paddingTop: 4,
    paddingHorizontal: 16,
    borderBottomWidth: 0.8,
    borderBlockColor: "#CBCCD0",
    marginTop: 16,
    backgroundColor: "#FFFFFF",
  },
  lastUpdatedAndSearchAndFilterIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  lastUpdatedContainer: {
    marginRight: 32,
  },
  lastUpdatedText: {
    fontFamily: "Manrope",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 14,
    letterSpacing: -0.035,
    color: "#626772",
  },
  searchContainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingLeft: 8,
    gap: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 24,
  },
  closeButton: {
    marginLeft: "auto",
    marginRight: 8,
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
