import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacingModerateScale } from "../../res/dimension";
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
import ActionModal from "../../components/Modal/ActionModal/ActionModal";
import FilterModal from "../../components/Modal/FilterModal/FilterModal";

const AllQuotes = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openFilterModal,setOpenFilterModal] = useState(false)

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    setOpenModal(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperView}>
          <HeaderWithouIcon title={"All Quotes / Due for Renewal"} />
          <View style={styles.searchAndFilter}>
            <View style={styles.searhContainer}>
              <SEARCH />
              <TextInput style={styles.searchInput} />
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={()=>setOpenFilterModal(true)}>
              <FILTER />
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
            <FilterModal openFilterModal={openFilterModal} setOpenFilterModal={setOpenFilterModal}/>
            <TouchableOpacity style={styles.optionsContainer}>
              <OPTION />
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeIndicatiorContainer}>
              <HOME_INDICATOR />
            </TouchableOpacity>
          </View>

          <Filters
            data={filtersData}
            selectedFilter={selectedFilter}
            setSelectedFilter={handleFilterPress}
          />
          <ActionModal openModal={openModal} setOpenModal={setOpenModal} />
          {/* <View></View> */}
          <NoDataFoundPage />
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
  },
  searchAndFilter: {
    flexDirection: "row",
    gap: spacingModerateScale.space_m2,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: spacingModerateScale.space_m3,
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
