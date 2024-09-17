import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    gap: 16,
  },
  mainContainer: {
    height: 243,
    width: "100%",
    borderRadius: 16,
    paddingTop: 16,
    paddingRight: 12,
    paddingBottom: 16,
    paddingLeft: 12,
    backgroundColor: "#ffffff",
    // marginTop: 16,
    marginBottom: 16,
  },
  child1: {
    flexDirection: "row", // Align elements in a row
    justifyContent: "space-between", // Space out elements with name & number on the left, logo on the right
    alignItems: "center", // Vertically center the elements
    padding: 7, // Add padding if needed
  },
  textContainer: {
    flexDirection: "column", // Align name and number vertically
    justifyContent: "center", // Center the text within its container
  },
  nameText: {
    // fontFamily: "Anek Latin",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28.8,
    textAlign: "left",
    color: "#2E2E2E",
    // opacity:0.8,
  },
  numberText: {
    // fontFamily: "Anek Latin",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    color: "#4c4c4c",
    opacity: 0.6,
    paddingTop: 7,
  },
  logoContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 42,
    height: 42,
    padding: 5,
    borderRadius: 5,
    // backgroundColor:"#c7222A",
    // color:"#FFFFFF"
  },
  child2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
  },
  Agent: {
    // fontFamily: "Anek Latin",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    color: "black",
    opacity: 0.6,
  },
  agentcode: {
    // fontFamily: "Anek Latin",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "left",
    color: "black",
    opacity: 0.8,
  },
});
