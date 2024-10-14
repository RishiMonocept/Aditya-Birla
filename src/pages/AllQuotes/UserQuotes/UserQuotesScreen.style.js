import { StyleSheet } from "react-native";
import { spacingModerateScale } from "../../../res/dimension";
// import { spacingModerateScale } from "../../../res/dimension";
import { fontSize, lineHeight } from "../../../res/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    marginTop: 4,
  },
  wrapperView: {
    marginHorizontal: spacingModerateScale.space_m2,
    flex: 1,
    gap: 32,
  },
  searchAndFilter: {
    flexDirection: "row",
    gap: spacingModerateScale.space_m2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searhContainer: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingVertical: spacingModerateScale.space_s3,
    paddingHorizontal: spacingModerateScale.space_base,
    borderRadius: 40,
    // width: spacingModerateScale.space_xl2 + spacingModerateScale.space_xl2,
    flex: 1,
    overflow: "hidden",
  },
  searchInput: {
    fontSize: fontSize.font12,
    marginHorizontal: spacingModerateScale.space_m1,
    width: "80%",
    color: "#767D93",
  },
  filterButton: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: spacingModerateScale.space_s2,
    paddingHorizontal: spacingModerateScale.space_m2,
    gap: spacingModerateScale.space_s1,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 20,
  },
  filterText: {
    fontSize: fontSize.font14,
    fontWeight: "400",
    lineHeight: lineHeight.lineHeight24,
    color: "#797979",
  },
  optionsContainer: {
    padding: spacingModerateScale.space_base,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  homeIndicatiorContainer: {
    padding: spacingModerateScale.space_base,
    borderRadius: 6,
    backgroundColor: "#c7222a",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 22,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topBar: {
    gap: 24,
    flexDirection: "row",
  },
  downLoadIcon: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 10,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  toggleMenu: {
    gap: 16,
    flexDirection: "row",
  },
  homeBtn: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  topBarText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 15.4,
  },
});
