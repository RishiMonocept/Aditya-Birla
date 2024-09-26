import { Platform } from "react-native";
import {
  sizeWithoutScale,
  shadowOpacityElevation,
  ShadowRadius,
} from "./dimension";
import colors from "./theme/colors";

export const shadowStyles = Platform.select({
  ios: {
    shadowColor: colors.rgba.shadowColorcard,
    shadowOffset: {
      width: sizeWithoutScale.width2,
      height: sizeWithoutScale.height4,
    },
    shadowOpacity: shadowOpacityElevation.opacity1,
    shadowRadius: ShadowRadius.shadowRadius3,
  },
  android: {
    elevation: shadowOpacityElevation.elevation12,
    // shadowColor: "#046FCC",
    // shadowColor: "#06733A",
    shadowColor: colors.darkNeutrals.n600,
  },
});

export const blueShadowStyles = Platform.select({
  ios: {
    shadowColor: colors.secondaryColors.summerSky,
    shadowOffset: {
      width: sizeWithoutScale.width2,
      height: sizeWithoutScale.height4,
    },
    shadowOpacity: shadowOpacityElevation.opacity1,
    shadowRadius: ShadowRadius.shadowRadius3,
  },
  android: {
    elevation: 20, //shadowOpacityElevation.elevation12,
    shadowColor: colors.secondaryColors.summerSky,
  },
});

export const shadowCardStyles = Platform.select({
  ios: {
    shadowColor: colors.rgba.shadowColorcard,
    shadowOffset: {
      width: sizeWithoutScale.width2,
      height: sizeWithoutScale.height4,
    },
    shadowOpacity: shadowOpacityElevation.opacity1,
    shadowRadius: ShadowRadius.shadowRadius3,
  },
  android: {
    elevation: shadowOpacityElevation.elevation4,
    shadowColor: "rgba(80, 86, 98, 0.10)",
  },
});

export const incentiveCardStyles = Platform.select({
  ios: {
    shadowColor: colors.rgba.shadowColorcard,
    shadowOffset: {
      width: sizeWithoutScale.width2,
      height: sizeWithoutScale.height4,
    },
    shadowOpacity: shadowOpacityElevation.opacity1,
    shadowRadius: ShadowRadius.shadowRadius3,
  },
  android: {
    elevation: shadowOpacityElevation.elevation12,
    shadowColor: "#046FCC",
  },
});

export const commissionCardStyles = Platform.select({
  ios: {
    shadowColor: colors.rgba.shadowColorcard,
    shadowOffset: {
      width: sizeWithoutScale.width2,
      height: sizeWithoutScale.height4,
    },
    shadowOpacity: shadowOpacityElevation.opacity1,
    shadowRadius: ShadowRadius.shadowRadius3,
  },
  android: {
    elevation: shadowOpacityElevation.elevation12,
    shadowColor: "#06733A",
  },
});
