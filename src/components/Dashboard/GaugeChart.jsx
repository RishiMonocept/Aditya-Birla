import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const GaugeChart = ({ value, maxValue, width = 200, height = 100 }) => {
  const percentage = Math.min(value / maxValue, 1); // Clamp the value to 1
  const needleRotation = percentage * 180; // Scale from 0 to 180 degrees

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

        <View style={styles.halfCircleBorder} />
        {/* Needle */}
        <View
          style={[
            styles.needle,
            {
              height: height * 0.9, // Keep needle height relative to the provided height
              transform: [{ rotate: `${needleRotation - 90}deg` }],
            },
          ]}
        />

        <Text
          style={[styles.valueLabel, { top: height * 0.6, left: width * 0.45 }]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  gauge: {
    overflow: "hidden",
    position: "relative",
  },
  halfCircleBorder: {
    position: "absolute",
    width: "80%",
    height: "80%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: "#fff",
    bottom: 0,
    marginLeft: "10%",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  needle: {
    position: "absolute",
    width: 7,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "grey",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    left: "50%",
    transformOrigin: "bottom",
    top: "10%",
  },
  valueLabel: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default GaugeChart;
