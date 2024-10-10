import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  borderRadius,
  borderWidth,
  spacingModerateScale,
} from "../../res/dimension";
import HeaderWithouIcon from "../../components/Header/HeaderWithouIcon";

// data
import filtersData from "./filtersData.json";

// icons
import SEARCH from "../../assets/AllQuotes/Search.svg";
import FILTER from "../../assets/AllQuotes/Filter.svg";
import OPTION from "../../assets/AllQuotes/Option.svg";
import HOME_INDICATOR from "../../assets/AllQuotes/HomeIndicator.svg";
import { fontSize, lineHeight } from "../../res/theme/fonts";
import Filters from "../../components/Filter/Filters";
import NoDataFoundPage from "../../components/noDataFound/NoDataFoundPage";
import BottomNavigation from "../../components/BottomNavigation";
import PolicyCard from "../../components/CardUIs/PolicyCard";

const AllQuotes = () => {
  const [selectedFilter, setSelectedFilter] = useState();

  const policies = [
    {
      id: 1,
      name: "Krishnan Swami",
      rating: 2,
      product: "Activ Fit",
      policyType: "RUG Policy",
      policyNumber: "23-22-0175217-00",
      status: "Pending",
      mobileNumber: "9321075751",
      dateOfRenewal: "2023-03-15",
      renewalPremium: {
        totalPremium: 25000,
        hrBenefits: -786,
        renewalPremium: 24214,
      },
      modification: {
        description: "Member Added, Tenure 1 Year",
      },
      icons: {
        editIcon: true,
        viewIcon: true,
        moreOptionsIcon: true,
      },
    },
    {
      id: 2,
      name: "Krishnan Swami",
      rating: 2,
      product: "Activ Fit",
      policyType: "RUG Policy",
      policyNumber: "23-22-0175217-00",
      status: "Pending",
      mobileNumber: "9321075751",
      dateOfRenewal: "2023-03-15",
      renewalPremium: {
        totalPremium: 25000,
        hrBenefits: -786,
        renewalPremium: 24214,
      },
      modification: {
        description: "Member Added, Tenure 1 Year",
      },
      icons: {
        editIcon: true,
        viewIcon: true,
        moreOptionsIcon: true,
      },
    },
    {
      id: 3,
      name: "Krishnan Swami",
      rating: 2,
      product: "Activ Fit",
      policyType: "RUG Policy",
      policyNumber: "23-22-0175217-00",
      status: "Pending",
      mobileNumber: "9321075751",
      dateOfRenewal: "2023-03-15",
      renewalPremium: {
        totalPremium: 25000,
        hrBenefits: -786,
        renewalPremium: 24214,
      },
      modification: {
        description: "Member Added, Tenure 1 Year",
      },
      icons: {
        editIcon: true,
        viewIcon: true,
        moreOptionsIcon: true,
      },
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperView}>
          <View style={{ gap: 22 }}>
            <HeaderWithouIcon title={"All Quotes / Due for Renewal"} />
            <View style={styles.searchAndFilter}>
              <View style={styles.searhContainer}>
                <SEARCH />
                <TextInput style={styles.searchInput} />
              </View>
              <TouchableOpacity style={styles.filterButton}>
                <FILTER />
                <Text style={styles.filterText}>Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionsContainer}>
                <OPTION />
              </TouchableOpacity>
              <TouchableOpacity style={styles.homeIndicatiorContainer}>
                <HOME_INDICATOR />
              </TouchableOpacity>
            </View>
          </View>
          <Filters
            data={filtersData}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          {/* <View></View> */}

          <FlatList
            data={policies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PolicyCard policy={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          />
          {/* <NoDataFoundPage /> */}
        </View>
        {/* <BottomNavigation /> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  wrapperView: {
    marginHorizontal: spacingModerateScale.space_m2,
    flex: 1,
    gap: 32,
  },
  searchAndFilter: {
    flexDirection: "row",
    gap: spacingModerateScale.space_m2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searhContainer: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingVertical: spacingModerateScale.space_s3,
    paddingHorizontal: spacingModerateScale.space_base,
    borderRadius: 40,
    // width: spacingModerateScale.space_xl2 + spacingModerateScale.space_xl2,
    flex: 1,
    overflow: "hidden",
  },
  searchInput: {
    fontSize: fontSize.font12,
    marginHorizontal: spacingModerateScale.space_m1,
    width: "80%",
    color: "#767D93",
  },
  filterButton: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: spacingModerateScale.space_s2,
    paddingHorizontal: spacingModerateScale.space_m2,
    gap: spacingModerateScale.space_s1,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 20,
  },
  filterText: {
    fontSize: fontSize.font14,
    fontWeight: "400",
    lineHeight: lineHeight.lineHeight24,
    color: "#797979",
  },
  optionsContainer: {
    padding: spacingModerateScale.space_base,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  homeIndicatiorContainer: {
    padding: spacingModerateScale.space_base,
    borderRadius: 6,
    backgroundColor: "#c7222a",
  },
});

export default AllQuotes;
