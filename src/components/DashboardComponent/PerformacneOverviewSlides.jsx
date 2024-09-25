import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import policysold2 from "../../assets/Dashboard/policysold2.png";
import coin from "../../assets/Dashboard/coin.png";
import exploreMore from "../../assets/Dashboard/ExploreMorebtn.png";
import chart from "../../assets/Dashboard/MyperformanceChart.png"

export default function PerformacneOverviewSlides({ icon, title, number }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Image
          style={{ width: 34, height: 34 }}
          source={icon}
          resizeMethod="contain"
        />
        <Text style={{ fontSize: 18, fontWeight: "700", lineHeight: 19.8 }}>
          {title}
        </Text>
      </View>
      <Text style={styles.number}>{number}</Text>

      <View style={styles.policysold2}>
        <Image
          style={{ width: 12.18, height: 12.2 }}
          source={policysold2}
          resizeMethod="contain"
        />
        <Text
          style={{
            fontSize: 12,
            lineHeight: 16,
            fontWeight: "400",
            color: "#2E2E2E",
          }}
        >
          You seem to be selling a majority{"\n"}of Activ Fit plans
        </Text>
      </View>

      <View style={styles.goalAchieved}>
        <Text style={styles.goalAchievedText}>
          78% of monthly goal acheived
        </Text>
        <View style={styles.backprogressBar}>
          <View style={styles.progressBar}></View>
        </View>
      </View>

      <View style={styles.coinwithActionable}>
        <View style={styles.coinwithActionablechild}>
          <Image
            style={{ width: 12.18, height: 12.2 }}
            source={coin}
            resizeMethod="contain"
          />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: "#2E2E2E",
            }}
          >
            You can potentially earn 10,000{"\n"}more with just 2 more policies
          </Text>
        </View>
        <View style={styles.Actionable}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 24,
              color: "#C7222A",
            }}
          >
            Actionable link
          </Text>
          <Image
            style={{ width: 6.67, height: 3.33, borderWidth: 1 }}
            source={exploreMore}
            resizeMethod="conain"
          />
        </View>
      </View>

      <View>
        <Image style={{height:86,width:162}} source={chart} resizeMethod="contain"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 22,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 16,
    gap: 16,
    borderColor: "#E6E6E6",
    backgroundColor: "#FFF",
    elevation: 5,
    shadowColor: "#5680B3",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  headingContainer: { flexDirection: "row", alignItems: "center", gap: 16 },
  number: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 30.8,
    // borderWidth:1
  },
  coinwithActionable: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#FFDE32",
    backgroundColor: "#FFF4CE50",
    // justifyContent: "center",
    gap: 10,
   
  },
  coinwithActionablechild: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFF4CE50",
    // paddingHorizontal: 8,
    borderRadius: 10,
    // borderWidth:1
  
  },
  policysold2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.5,
    borderColor: "#FFDE32",
    backgroundColor: "#FFF4CE50",
    paddingHorizontal: 8,
    paddingVertical:6,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  goalAchieved: {
    paddingHorizontal: 0,
    paddingVertical: 6,
    gap: 9,
  },
  goalAchievedText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 13.8,
  },
  backprogressBar: {
    height: 13,
    backgroundColor: "#E7FCF4",
    borderRadius: 16,
    justifyContent: "center",
  },
  progressBar: {
    height: 7,
    width: 154,
    backgroundColor: "#1F874C",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    left: 2.5,
  },
  Actionable: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
});
