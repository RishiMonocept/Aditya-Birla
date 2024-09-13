import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainConatiner: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    gap: 12,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 14,
  },
  titleDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 16,
  },
  dateText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#4C4C4C",
  },
  descriptionText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#4C4C4C",
  },
});
