import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f3f6",
    borderRadius: 20,
    overflow: "hidden",
  },
  containerStyle: {
    borderRadius: 20,
    overflow: "hidden",
  },
  itemContainer: {
    borderRadius: 20,
  },
  dropdown: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#979CAE",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
