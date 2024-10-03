import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
// import noise from "../../assets/Dashboard/noiseIcon.png"

export default function LatestFromAbhiSlides({
  icon,
  title,
  desc,
  exploreMore,
}) {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          //   height: 34,
          //   width: 36,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //   borderWidth: 3,
        }}
      >
        <View
          style={{
            height: 32,
            width: 34,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={icon} style={styles.icon} resizeMethod="contain" />
        </View>
        <View
          style={{
            height: 32,
            width: 34,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={exploreMore}
            style={styles.exploreMore}
            resizeMethod="contain"
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 12,
    gap: 8,
    backgroundColor: "#FFF",
  },
  icon: {
    width: 36,
    height: 34,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
    color: "#4C4C4C",
  },
  desc: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "300",
    color: "#797979",
  },
  exploreMore: {
    height: 12,
    width: 7,
  },
});
