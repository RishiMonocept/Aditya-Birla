import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  borderRadius,
  spacing,
  spacingModerateScale,
} from "../../../res/dimension";
import colors from "../../../res/theme/colors";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";
import CROSS_ICON from "../../../assets/AllQuotes/crossIcon.svg";
import FilterCheckBoxAndText from "./FilterCheckBoxAndText";
import DateInput from "../../TextInputUIs/DateInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import CALENDAR_ICON from "../../../assets/Forms/calendar-icon.png";
import ButtonInModal from "./ButtonInModal";

const filterData = {
  products: ["Active Fit", "Active One", "Active Fit Plus", "Active One Next"],
  policyTypes: ["Retail", "RUG", "COI Policy", "Master Policy"],
};

export default function FilterModal({ openFilterModal, setOpenFilterModal }) {
  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateError, setDateError] = useState("");

  const [activeButton, setActiveButton] = useState(null);

  const handleCancelPress = () => {
    setActiveButton("cancel");
  };

  const handleApplyPress = () => {
    setActiveButton("apply");
  };

  const renderCheckBoxes = (data) => {
    return data.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <View style={styles.checkboexAndTitle} key={index}>
            <FilterCheckBoxAndText title={data[index]} />
            {data[index + 1] && (
              <FilterCheckBoxAndText title={data[index + 1]} />
            )}
          </View>
        );
      }
    });
  };

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDateCalendar(false);

    if (endDate && currentDate > endDate) {
      setDateError("Start date cannot be greater than end date.");
    } else {
      setStartDate(currentDate);
      setDateError("");
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDateCalendar(false);

    if (startDate && currentDate < startDate) {
      setDateError("End date cannot be less than start date.");
    } else {
      setEndDate(currentDate);
      setDateError("");
    }
  };

  const handleCloseModal = () => {
    setOpenFilterModal(false);
    setStartDate(null);
    setEndDate(null);
    setDateError("");
  };

  const top = "13%";
  const { height } = Dimensions.get("screen");
  const percentage = parseFloat(top.replace("%", "")) / 100;
  const openHeight = height * percentage;

  return (
    <Modal
      visible={openFilterModal}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={[styles.outerContainer, { top: openHeight }]}>
          <View style={{ gap: 32 }}>
            <View style={styles.topContainer}>
              <Text style={styles.ActionText}>Filter</Text>
              <TouchableOpacity
                style={styles.crossIcon}
                onPress={handleCloseModal}
              >
                <CROSS_ICON />
              </TouchableOpacity>
            </View>
            <View style={styles.productsContainer}>
              <Text style={styles.productText}>Products</Text>
              <View style={styles.checkboxContainer}>
                {renderCheckBoxes(filterData.products)}
              </View>
            </View>

            <View style={styles.productsContainer}>
              <Text style={styles.productText}>Policy Type</Text>
              <View style={styles.checkboxContainer}>
                {renderCheckBoxes(filterData.policyTypes)}
              </View>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.productText}>Date Range</Text>
              <View style={styles.mainContainer}>
                <Text>
                  {startDate
                    ? format(startDate, "dd/MM/yyyy")
                    : "Select Start Date"}
                </Text>
                <TouchableOpacity
                  style={{ padding: 4 }}
                  onPress={() => setShowStartDateCalendar(true)}
                >
                  <Image source={CALENDAR_ICON} style={styles.icon} />
                </TouchableOpacity>
                {showStartDateCalendar && (
                  <DateTimePicker
                    value={startDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onStartDateChange}
                  />
                )}
              </View>

              <View style={styles.mainContainer}>
                <Text>
                  {endDate ? format(endDate, "dd/MM/yyyy") : "Select End Date"}
                </Text>
                <TouchableOpacity
                  style={{ padding: 4 }}
                  onPress={() => setShowEndDateCalendar(true)}
                >
                  <Image source={CALENDAR_ICON} style={styles.icon} />
                </TouchableOpacity>
                {showEndDateCalendar && (
                  <DateTimePicker
                    value={endDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onEndDateChange}
                  />
                )}
              </View>

              {dateError ? (
                <Text style={styles.errorText}>{dateError}</Text>
              ) : null}
            </View>

            <View style={styles.btnContainer}>
              <ButtonInModal
                title="Cancel"
                onPress={handleCancelPress}
                activeColors={{
                  background: colors.primaryColors.vibrantRed,
                  text: colors.primaryColors.white,
                }}
                inactiveColors={{
                  background: colors.lightNeutrals.lightGray,
                  text: colors.primaryColors.vibrantRed,
                }}
              />
              <ButtonInModal
                title="Apply"
                onPress={handleApplyPress}
                activeColors={{
                  background: colors.primaryColors.vibrantRed,
                  text: colors.primaryColors.white,
                }}
                inactiveColors={{
                  background: colors.lightNeutrals.lightGray,
                  text: colors.primaryColors.vibrantRed,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  outerContainer: {
    paddingTop: spacingModerateScale.space_m4,
    paddingRight: spacingModerateScale.space_m2,
    paddingBottom: spacingModerateScale.space_l2,
    paddingLeft: spacingModerateScale.space_m2,
    gap: spacingModerateScale.space_10,
    borderTopLeftRadius: borderRadius.borderRadius12,
    borderTopRightRadius: borderRadius.borderRadius12,
    backgroundColor: colors.primaryColors.lightShadeGray,
  },
  topContainer: {
    flexDirection: "row",
    gap: spacingModerateScale.space_l1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  ActionText: {
    fontSize: fontSize.font22,
    fontWeight: fontWeight.weight600,
    lineHeight: lineHeight.lineHeight19dot8,
  },
  crossIcon: {
    height: spacing.space_22,
    width: spacing.space_22,
    alignItems: "center",
    justifyContent: "center",
  },
  productsContainer: {
    gap: spacingModerateScale.space_m1,
  },
  productText: {
    fontSize: fontSize.font18,
    fontWeight: fontWeight.weight600,
    lineHeight: lineHeight.lineHeight19dot8,
    color: colors.primaryColors.black,
  },
  checkboxContainer: {
    gap: spacingModerateScale.space_m2,
  },
  checkboexAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    backgroundColor: colors.primaryColors.white,
    borderRadius: 20,
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 18,
    height: 20,
  },
  dateContainer: {
    gap: spacingModerateScale.space_m2,
    // borderWidth: 1,
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
  btnContainer: {
    gap: spacingModerateScale.space_m1,
    paddingTop: spacingModerateScale.space_m4,
    // borderWidth: 1,
    flexDirection: "row",
  },
});
