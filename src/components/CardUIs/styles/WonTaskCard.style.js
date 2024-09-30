import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const { width } = Dimensions.get("window"); // Get the device width

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 16,
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
    width: width * 0.8,
    borderColor: "#E6E6E6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    justifyContent: "space-between",
    // gap: 100,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    // borderWidth: 1,
  },
  headerIcon: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  profileImage: {
    width: 18,
    height: 18,
    borderRadius: 20,
  },
  name: {
    lineHeight: 17.6,
    fontSize: 16,
    fontWeight: "700",
  },
  statusList: {
    paddingVertical: 8,
    gap: 8,
    // borderWidth: 1,
  },
  statusItem: {
    // borderWidth: 1,
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    borderRadius: 4,
    height: 16,
    width: 16,
    backgroundColor: "#E1E4E8",
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    lineHeight: 15.4,
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },
  completed: {
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  updatesLable: {
    width: width * 0.715,
    gap: 5,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 8,
    backgroundColor: "#fff9e6",
    flexDirection: "row",
  },
  icon: {
    justifyContent: "center",
  },
  description: {
    width: width * 0.6,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 13,
    color: "#000000",
  },
  linkContainer: {
    width: width * 0.715,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: "#C7222A",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 14,
    fontWeight: "500",
  },
  actionIcon: {
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
