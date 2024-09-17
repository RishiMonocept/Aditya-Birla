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
    justifyContent: "space-between", // Adjusted for better spacing
  },
  searchIcon: {
    width: 17.5,
    height: 17.5,
  },
  inputField: {
    flex: 1, // Adjust input field to fill available space
    marginLeft: 11.5,
    height: 20,
    fontSize: 14, // Increased font size for better readability
  },
});
