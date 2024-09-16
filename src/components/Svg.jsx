import React from "react";
import { Platform } from "react-native";

export default ({ width, height, source, fill = "none", style }) =>
  Platform.select({
    ios: () => {
      const SVG = source;
      return <SVG width={width} height={height} fill={fill} style={style} />;
    },

    android: () => {
      const SVG = source;
      return <SVG width={width} height={height} fill={fill} style={style} />;
    },
  })();
