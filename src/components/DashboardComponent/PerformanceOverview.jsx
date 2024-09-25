import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import tips from "../../assets/Dashboard/Tips.png";
import badge from "../../assets/Dashboard/badge.png";
import calender from "../../assets/Dashboard/calendar.png";
import dowmIcon from "../../assets/Dashboard/dropdown.png";
import PerformacneOverviewSlides from "./PerformacneOverviewSlides";
import policySold from "../../assets/Dashboard/policySold.png";
// import premium from "../../assets/Dashboard/premium.png
// import commission from "../../assets/Dashboard/commissionEarned.png;
import premium from "../../assets/Dashboard/premium.png"
import commissions from "../../assets/Dashboard/commissonEarnd.png"
import myPerformance from "../../assets/Dashboard/myPerformance.png"

export default function PerformanceOverview() {
  const data = [
    { id: "1", title: "Policies Sold", icon: policySold, number: 1295 },
    { id: "2", title: "Premium", icon: premium, number: "₹ 369.96 L" },
    { id: "3", title: "Commission Earned", icon: commissions, number: "₹ 50,000" },
    { id: "4", title: "My Performance", icon: myPerformance,},
  ];
  return (
    <>
      <View>
        <Text style={styles.performanceText}>Performance Overview</Text>
      </View>
      <View style={styles.tips}>
        <Image
          style={{ width: 24, height: 24 }}
          source={tips}
          resizeMethod="contain"
        />
        <Text style={styles.tipsText}>
          You've converted 10% more people this month compared to last month
        </Text>
      </View>
      <View style={styles.proSellerView}>
        <Image style={styles.badge} source={badge} resizeMethod="contain" />
        <Text style={styles.proSeller}>Pro Seller</Text>
      </View>
      <View style={styles.timeFrame}>
        <View style={styles.calender}>
          <Text style={styles.calendertext}>As of 24th July 2024</Text>
          <Image
            style={styles.calenderIcon}
            source={calender}
            resizeMethod="contain"
          />
        </View>
        <View style={styles.calender}>
          <Text style={styles.calendertext}>Annually</Text>
          <Image style={styles.dropdownIcon} source={dowmIcon} />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <PerformacneOverviewSlides
            icon={item.icon}
            title={item.title}
            number={item.number}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 17 }} />}
      />
    </>
  );
}
const styles = StyleSheet.create({
  performanceText: {
    // borderWidth: 1,
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 28,
    color: "#000",
    paddingTop: 18,
  },
  tips: {
    padding: 8,
    backgroundColor: "#FFF4CE39",
    gap: 8,
    borderRadius: 4,
    flexDirection: "row",
    // opacity:0.39
  },
  tipsText: {
    fontSize: 13,
    lineHeight: 14.3,
    fontWeight: "400",
    color: "#2e2e2e",
  },
  proSellerView: {
    // borderWidth:1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8.33,
  },
  badge: {
    width: 29.87,
    height: 24,
  },
  proSeller: {
    fontSize: 14.93,
    lineHeight: 16.43,
    fontWeight: "700",
    color: "#A83ABB",
  },
  timeFrame: {
    flexDirection: "row",
    // borderWidth:1,
    gap: 8,
  },
  calender: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingTop: 4,
    backgroundColor: "#fff",
    gap: 4,
    alignItems: "center",
    marginTop: 14,
  },
  calendertext: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  calenderIcon: {
    width: 20,
    height: 20,
  },
  dropdownIcon: {
    width: 6.67,
    height: 4.44,
    color: "#000",
  },
});
