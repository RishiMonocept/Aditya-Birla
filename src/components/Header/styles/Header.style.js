import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer: {
    // marginVertical: 12,
    width: "100%",
    height: 58,
    gap: 10,
    flexDirection: "row",
  },
  backBarContainer: {
    width: 34,
    height: 34,
    // borderRadius: "7px",
    backgroundColor: "#ffffff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 7.41,
    height: 12,
    resizeMode: "cover",
  },
  textContainer: {
    paddingVertical: 7,
  },
  textContent: {
    fontSize: 16,
    fontWeight: "600",
  },
});
