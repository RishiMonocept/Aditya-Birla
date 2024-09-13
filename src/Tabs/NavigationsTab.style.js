import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 36.5,
    backgroundColor: "#fff",
    width: "100%",
    height: 66,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  activeTab: {
    width: 160,
    height: 38,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C7222A",
  },
  tab: {
    width: 160,
    height: 38,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
  },
  tabText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000",
  },
});
