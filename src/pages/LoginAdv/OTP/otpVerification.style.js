import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // width: "100%",
    backgroundColor: "#F1F3F6",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  otpInput: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "#F1F3F6",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "400",
  },
});
