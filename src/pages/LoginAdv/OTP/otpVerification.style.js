import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F3F6",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // gap: 8,
  },
  otpInput: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "#F1F3F6",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 5,
    fontSize: 18,
    textAlign: "center",
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#C7222A",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
