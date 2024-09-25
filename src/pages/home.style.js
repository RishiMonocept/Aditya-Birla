import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: "#F1F3F6",
  },
  safeAreaView: {
    flex: 1,
    paddingTop: 14,
    marginHorizontal: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -16,
    // borderWidth:2,
    paddingHorizontal: 16,
    // backgroundColor:""
  
  },
  titleContainer: {
    borderWidth: 1,
    width: "66%",
  },
  titleText: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  exploreContainer: {
    borderWidth: 1,
    width: "34%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  exploreText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: "#C7222A",
  },
  exploreIcon: {
    width: 6.67,
    width: 4.3,
  },
});
