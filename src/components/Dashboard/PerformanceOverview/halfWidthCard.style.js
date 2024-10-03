import { StyleSheet } from "react-native";
import { fontSize, fontSize14, lineHeight } from "../../../res/theme/fonts";
import { spacing, spacingModerateScale } from "../../../res/dimension";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: spacing.space_m3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    paddingVertical: spacingModerateScale.space_m3,
    paddingHorizontal: spacingModerateScale.space_m2,
    gap: spacingModerateScale.space_m1,
  },
  icon: {
    // width: 24,
    // height: 24,
    // marginBottom: 8,
  },
  title: {
    color: "#2E2E2E",
    fontWeight: "700",
    fontSize: fontSize.font14,
    marginLeft: spacingModerateScale.space_base,
  },
  amount: {
    color: "#2E2E2E",
    fontSize: fontSize.font28,
    fontWeight: "700",
  },
  progress: {
    fontSize: fontSize.font12,
    color: "#2E2E2E",
    lineHeight: lineHeight.lineHeight16dot4,
    fontWeight: "400",
  },
  notification: {
    fontSize: fontSize.font12,
    color: "#2E2E2E",
    lineHeight: lineHeight.lineHeight16dot4,
    fontWeight: "400",
  },
  link: {
    fontSize14,
    color: "#C7222A",
  },
});
