import React from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import { LinearGradient as LinearGradientExpo } from "expo-linear-gradient";
import { styles } from "./gaugeChart.style";

const { width, height } = Dimensions.get("window");
const radius = Math.min(width, height) * 0.4;

const GaugeChart = ({
  value,
  maxValue,
  width = 200,
  height = 100,
  subtitle,
}) => {
  const percentage = Math.min(value / maxValue, 1); // Clamp the value to 1
  const needleRotation = value >= 0 && value <= 100 ? percentage * 180 : 0; // Scale from 0 to 180 degrees

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.gauge}>
        {/* SVG Background */}
        <Svg height={height} width={width}>
          <Defs>
            <LinearGradient id="gradient" x1="0%" y1="20%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#D34528" />
              <Stop offset="10%" stopColor="#FAA61A" />
              <Stop offset="40%" stopColor="#FFD56C" />
              <Stop offset="60%" stopColor="#70B865" />
              <Stop offset="90%" stopColor="#53A75C" />
              <Stop offset="100%" stopColor="#034C22" />
            </LinearGradient>
          </Defs>
          <Path
            d={`M 0,${height} A ${
              width / 2
            },${height} 0 0,1 ${width},${height}`}
            fill="url(#gradient)"
          />
        </Svg>

        <View style={styles.halfCircleBorder}>
          {/* Needle */}
          <LinearGradientExpo
            colors={["#c7222a", "#F1F3F650"]}
            style={[
              styles.needle,
              {
                height: height,
                transform: [{ rotate: `${needleRotation - 90}deg` }],
              },
            ]}
          />
        </View>
        <View style={styles.halfCircleBorder2}>
          <Text style={styles.chartTitle}>{value}%</Text>
          <Text style={styles.chartSubtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default GaugeChart;
