import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#F1F3F6",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: "center",
    // justifyContent: "center",
  },
  searchIcon: {
    width: 17.5,
    height: 17.5,
  },
  inputField: {
    marginLeft: 11.5,
    width: "85%",
    height: 20,
  },
  placeholderText: {
    position: "absolute",
    width: 100,
    fontWeight: "600",
    color: "#797979",
    left: 44,
    top: 13,
  },
});
