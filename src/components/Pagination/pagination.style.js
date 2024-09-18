import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 100,
  },
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    // borderColor: "#AFB3CO",
    borderRadius: 5,
    // marginHorizontal: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 24,
  },
  disabledButton: {
    borderWidth: 1,
  },
  pageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 9,
  },
  pageButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  pageButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  activePageButton: {
    backgroundColor: "#c7222a",
  },
  activePageButtonText: {
    color: "#fff",
  },
  ellipsis: {
    fontSize: 16,
    color: "#000",
    marginHorizontal: 5,
  },
});
