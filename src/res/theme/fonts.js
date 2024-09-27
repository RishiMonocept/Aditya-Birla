import { moderateScale, scale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const standardScreenHeight = Dimensions.get("window").height;
export const fontSize = {
  font10: RFValue(10, standardScreenHeight),
  font13: RFValue(13, standardScreenHeight),
  font18: RFValue(18, standardScreenHeight),
  font16: RFValue(16, standardScreenHeight),
  font32: RFValue(32, standardScreenHeight),
  font11: RFValue(11, standardScreenHeight),
  font40: RFValue(40, standardScreenHeight),
  font48: RFValue(48, standardScreenHeight),
  font62: RFValue(62, standardScreenHeight),
  font24: RFValue(24, standardScreenHeight),
  font25: RFValue(25, standardScreenHeight),
  font20: RFValue(20, standardScreenHeight),
  font8: RFValue(8, standardScreenHeight),
  font34: RFValue(34, standardScreenHeight),
};
export const fontSize14 = {
  fontSize14: moderateScale(14),
};
export const fontWeight = {
  weight400: "400",
  weight500: "500",
  weight700: "700",
};
export const lineHeight = {
  lineHeight11: verticalScale(11.2),
  lineHeight36: scale(36),
  lineHeight18dot2: 18.2,
  lineHeight19dot6: 19.6,
  lineHeight22dot4: 22.4,
  lineHeight15dot4: 15.4,
  lineHeight24: scale(24),
  lineHeight28: scale(28),
  lineHeight35: scale(35),
  lineHeight44: scale(44.8),
  linHeight67: 67.2,
  linHeight86: 86.6,
  lineHeight56: scale(56),
};
export const fontType = {
  manrope: "Manrope",
  manropeBold: "Manrope-Bold",
  manropeMedium: "Manrope-Medium",
  anekLatin: "Anek Latin",
};

export const letterSpacing = {
  minus0007: scale(-0.007),
  minus0028: scale(-0.028),
  minus0035: scale(-0.035),
  minus0045: scale(-0.045),
  minus0049: scale(-0.049),
  minus005: scale(-0.056),
  minus0087: scale(-0.087),
  minus0112: scale(-0.112),
  minus014: scale(-0.14),
  minus0168: scale(-0.168),
  minus0217: scale(-0.217),
  minus0056: scale(-0.056),
};

export const fontStyle = StyleSheet.create({
  displayLarge: {
    fontSize: fontSize.font62,
    lineHeight: lineHeight.linHeight86,
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    letterSpacing: letterSpacing.minus0217,
  },
  displayLargeMedium: {
    fontSize: fontSize.font62,
    lineHeight: lineHeight.linHeight86,
    fontFamily: fontType.manropeMedium,
    letterSpacing: letterSpacing.minus0217,
  },
  displayLargeBold: {
    fontSize: fontSize.font62,
    lineHeight: lineHeight.linHeight86,
    fontFamily: fontType.manropeBold,
    letterSpacing: letterSpacing.minus0217,
  },

  display: {
    fontSize: fontSize.font48,
    lineHeight: lineHeight.linHeight67,
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    letterSpacing: letterSpacing.minus0168,
  },
  displayMedium: {
    fontSize: fontSize.font48,
    lineHeight: lineHeight.linHeight67,
    fontFamily: fontType.manropeMedium,
    letterSpacing: letterSpacing.minus0168,
  },
  displayBold: {
    fontSize: fontSize.font48,
    lineHeight: lineHeight.linHeight67,
    fontFamily: fontType.manropeBold,
    letterSpacing: letterSpacing.minus0168,
  },
  h1: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    letterSpacing: letterSpacing.minus014,
  },
  h1Medium: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manropeMedium,
    letterSpacing: letterSpacing.minus014,
  },
  h1Bold: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manropeBold,
    letterSpacing: letterSpacing.minus014,
  },
  h2: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    letterSpacing: letterSpacing.minus014,
  },
  h2Medium: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manropeMedium,
    letterSpacing: letterSpacing.minus014,
  },
  h2Bold: {
    fontSize: fontSize.font40,
    lineHeight: lineHeight.lineHeight56,
    fontFamily: fontType.manropeBold,
    letterSpacing: letterSpacing.minus014,
  },
  h3: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight35,
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    letterSpacing: letterSpacing.minus0087,
    fontStyle: "normal",
  },

  h3Medium: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight35,
    fontFamily: fontType.manropeMedium,
    letterSpacing: letterSpacing.minus0087,
  },
  h3Bold: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight35,
    fontFamily: fontType.manropeBold,
    letterSpacing: letterSpacing.minus0087,
  },

  bodyLarge: {
    fontFamily: fontType.manrope,
    fontSize: fontSize.font20,
    fontWeight: fontWeight.weight400,
    lineHeight: lineHeight.lineHeight28,
    letterSpacing: letterSpacing.minus0007,
  },
  bodyLargeMedium: {
    fontFamily: fontType.manropeMedium,
    fontSize: fontSize.font20,
    lineHeight: lineHeight.lineHeight28,
    letterSpacing: letterSpacing.minus0007,
  },

  body: {
    fontFamily: fontType.manrope,
    fontSize: fontSize.font16,
    fontWeight: fontWeight.weight400,
    lineHeight: lineHeight.lineHeight22dot4,
    letterSpacing: letterSpacing.minus0056,
  },
  bodyMedium: {
    fontFamily: fontType.manropeMedium,
    fontSize: fontSize.font16,
    lineHeight: lineHeight.lineHeight22dot4,
    letterSpacing: letterSpacing.minus0056,
  },
  bodyBold: {
    fontFamily: fontType.manropeBold,
    fontSize: fontSize.font16,
    lineHeight: lineHeight.lineHeight22dot4,
    letterSpacing: letterSpacing.minus0056,
  },
  bodyRegular: {
    fontFamily: fontType.manrope,
    fontWeight: fontWeight.weight400,
    fontSize: fontSize.font13,
    lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
    fontStyle: "normal",
  },
  bodyMediumMedium: {
    fontFamily: fontType.manropeMedium,
    fontSize: fontSize.font13,
    lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
    fontStyle: "normal",
  },
  bodyMediumBold: {
    fontFamily: fontType.manropeBold,
    fontSize: fontSize.font13,
    // lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
    fontStyle: "normal",
  },

  bodyLargeBold: {
    fontFamily: fontType.manropeBold,
    fontSize: fontSize.font20,
    lineHeight: lineHeight.lineHeight28,
    letterSpacing: letterSpacing.minus0007,
    fontStyle: "normal",
  },
  bodySmall: {
    fontFamily: fontType.manrope,
    fontSize: fontSize.font10,
    lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
  },
  bodySmallMedium: {
    fontFamily: fontType.manropeMedium,
    fontSize: fontSize.font10,
    lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
  },
  bodySmallBold: {
    fontFamily: fontType.manropeBold,
    fontSize: fontSize.font10,
    lineHeight: lineHeight.lineHeight18dot2,
    letterSpacing: letterSpacing.minus0045,
  },
  // DashBard Styles
  subHeading: {
    fontSize: fontSize.font24,
    fontWeight: fontWeight.weight700,
    lineHeight: 28.8,
    fontFamily: fontType.anekLatin,
  },
});
