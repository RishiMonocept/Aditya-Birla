import { StyleSheet } from "react-native";
import {
  borderRadius,
  spacing,
  spacingModerateScale,
} from "../../res/dimension";
import { fontSize } from "../../res/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.space_10,
  },
  titleText: {
    color: "#797979",
    fontWeight: "400",
    fontSize: fontSize.font14,
  },
  filtersContainer: {
    marginTop: spacingModerateScale.space_m1,
    gap: spacingModerateScale.space_base,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  filter: {
    paddingHorizontal: spacingModerateScale.space_m2,
    paddingVertical: spacingModerateScale.space_base,
    backgroundColor: "#F1F3F6",
    borderRadius: borderRadius.borderRadius16,
  },
  selectedFilter: {
    backgroundColor: "#FFE7E5",
    borderColor: "#C7222A",
    borderWidth: 1,
  },
  filterText: {
    fontSize: fontSize.font12,
    lineHeight: 12,
    fontWeight: "500",
  },
});
