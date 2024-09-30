import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles/OpenTaskCard.style";
import DROPDOWN_ICON from "../../assets/Dashboard/ALL_TASKS/DROPDOWN_ICON.svg";
import DROPUP_ICON from "../../assets/Dashboard/ALL_TASKS/DROPUP_ICON.svg";
import ELLIPSE_ICON from "../../assets/Dashboard/ALL_TASKS/ELLIPSE_ICON.svg";
import CHECKED_GREY_ICON from "../../assets/Dashboard/ALL_TASKS/CHECKED_GREY_ICON.svg";

export default function OpenTaskCard({
  name,
  profileImage,
  status,
  updateCompletionStatus,
  mainIndex,
  isDropDownOpen,
  toggleDropDown,
}) {
  const { height } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.cardContainer,
        { height: !isDropDownOpen ? height * 0.06 : height * 0.16 },
      ]}
    >
      <TouchableWithoutFeedback onPress={toggleDropDown}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={profileImage} style={styles.profileImage} />
            <Text style={styles.name}>{name}</Text>
          </View>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleDropDown}>
            {isDropDownOpen ? <DROPUP_ICON /> : <DROPDOWN_ICON />}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {isDropDownOpen && (
        <View style={styles.statusList}>
          {status.map((statusItem, index) => (
            <View key={index} style={styles.statusItem}>
              <TouchableOpacity
                style={styles.checkBox}
                onPress={() => updateCompletionStatus(mainIndex, index)}
              >
                {statusItem.completed ? (
                  <CHECKED_GREY_ICON />
                ) : (
                  <ELLIPSE_ICON />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateCompletionStatus(mainIndex, index)} // Text press updates status
              >
                <Text
                  style={[
                    styles.statusText,
                    statusItem.completed && styles.completed,
                  ]}
                >
                  {statusItem.label}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
