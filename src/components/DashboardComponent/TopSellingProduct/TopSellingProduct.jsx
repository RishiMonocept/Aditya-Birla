import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
} from "../../../res/theme/fonts";
import colors from "../../../res/theme/colors";
import { borderRadius, ShadowRadius, spacing } from "../../../res/dimension";
import DropDownIcon from "../../../assets/Dashboard/dropdownIcon.svg";
import ACTIVEONEICON from "../../../assets/Dashboard/ActiveOneIcon.svg";
// import CHECKEDiCON from "../../../assets/Dashboard/checkedIcon.svg";
import TopSellingProductCard from "./TopSellingProductCard";
import ICON2 from "../../../assets/Dashboard/checkedIcon.svg";
import TIPS from "../../../assets/Dashboard/TipsIcon.svg";
import FORWARD_ICON from "../../../assets/Dashboard/forwardIcon.svg"

export default function TopSellingProduct() {
  const topSellingProductsData = [
    {
      id: "1",
      icon: <ACTIVEONEICON />,
      planName: "Activ One NXT",
      price: "₹6,863*",
      coverage: "5X Coverage of Base Sum",
      benifits1: "Health Assessment",
      benifits2: "Cover Home-based Treatments",
      checkedIcon: <ICON2 />,
      tips: <TIPS />,
      forward:<FORWARD_ICON/>,
      tipsMessage:"Show selling tips for me"
    },
    {
      id: "2",
      icon: <ACTIVEONEICON />,
      planName: "Activ One NXT",
      price: "₹6,863*",
      coverage: "5X Coverage of Base Sum",
      benifits1: "Health Assessment",
      benifits2: "Cover Home-based Treatments",
      checkedIcon: <ICON2 />,
      tips: <TIPS />,
      forward:<FORWARD_ICON/>,
      tipsMessage:"Show selling tips for me"
    },
  ];

  return (
    <View style={styles.topsellingContainer}>
      <Text style={fontStyle.subHeading}>Top Selling Products</Text>
      <View style={styles.dropdownAndCardContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.drodownText}>For Senior Citizens </Text>
          <TouchableOpacity style={styles.dropDwonIcon}>
            {<DropDownIcon />}
          </TouchableOpacity>
        </View>

        <FlatList
          data={topSellingProductsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TopSellingProductCard
              icon={item.icon}
              checkedIcon={item.checkedIcon}
              planName={item.planName}
              price={item.price}
              coverage={item.coverage}
              benifits1={item.benifits1}
              benifits2={item.benifits2}
              tips={item.tips}
              tipsMessage={item.tipsMessage}
              forward={item.forward}
            />
          )}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topsellingContainer: {
    // borderWidth: 1,
    gap: spacing.space_l2,
    // marginTop: 40,
  },

  topSellingText: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight36,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.black,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
  },
  dropdownAndCardContainer: {
    gap: spacing.space_m1,
  },
  dropdownContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.lightNeutrals.lightGray,
    borderRadius: borderRadius.borderRadius20,
    paddingHorizontal: spacing.space_m1,
    paddingVertical: spacing.space_s2,
    backgroundColor: colors.primaryColors.white,
    gap: spacing.space_s2,
    alignItems: "center",
    width: "50%",
    // marginTop: 14,
  },
  drodownText: {
    fontSize: fontSize.font14,
    lineHeight: spacing.space_m2,
    fontWeight: fontWeight.weight400,
  },
  dropDwonIcon: {
    width: spacing.space_m4,
    height: spacing.space_m4,
  },
});
