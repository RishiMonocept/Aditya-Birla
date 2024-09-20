import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.65,
  },
  headerContainer: {
    marginTop: 36,
    marginHorizontal: 16,
    gap: 24,
  },
  headerContent: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  headerTextContainer: {
    paddingVertical: 7,
    lineHeight: 28,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
  },
  searchContainer: {
    width: "100%",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  searchInput: {
    lineHeight: 13.2,
    fontSize: 12,
    fontWeight: "500",
  },
  searchResultItem: {
    padding: 10,
    lineHeight: 28,
  },
  searchResultContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
