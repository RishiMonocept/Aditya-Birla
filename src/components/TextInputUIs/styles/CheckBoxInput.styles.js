import { StyleSheet } from "react-native";
import {
  spacingModerateScale,
  spacingScale,
  spacingVerticalScale,
} from "../../../res/ScaledSheet";

export const styles = StyleSheet.create({
  memberDetailContainer: {
    justifyContent: "space-between",
    paddingHorizontal: spacingScale.m3,
    paddingVertical: spacingVerticalScale.base,
    gap: spacingModerateScale.base,
    borderRadius: spacingModerateScale.m3,
    backgroundColor: "#F1F3F6",
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxContainer: {
    margin: spacingModerateScale.s3,
    height: spacingVerticalScale.space_18,
    width: spacingScale.space_18,

    // borderColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: spacingVerticalScale.l2,
    width: spacingScale.l3,
    backgroundColor: "#fff",
    borderRadius: spacingModerateScale.m4,
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    fontSize: spacingModerateScale.m2,
    lineHeight: spacingVerticalScale.space_16dot8,
    fontWeight: "400",
    color: "#000",
  },
  deleteContainer: {
    gap: spacingModerateScale.base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderRadius: spacingModerateScale.m3,
    paddingHorizontal: spacingScale.base,
  },
});
