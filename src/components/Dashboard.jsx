import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import icon from "../assets/Dashboard/AbhiSeller.png";
import Dropdown from "../assets/Dashboard/AbhiDropdown.png";
import bell from "../assets/Dashboard/AbhiBell.png";
import RaiseATicket from "../assets/Dashboard/RaiseATicket.png";
import Plus from "../assets/Dashboard/PlusIcon.png";
import searchIcon from "../assets/Dashboard/AbhiSearch.png";

export default function Dashboard() {
  const [activeButton, setActiveButton] = useState("RaiseATicket");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.MainChild1}>
        <View style={styles.textView}>
          <Text style={styles.salutationText}>Good morning,{"\n"}Ajay</Text>
        </View>
        <View style={styles.mainChild2}>
          <TouchableOpacity style={styles.touchableDropdown}>
            <Image source={icon} style={styles.sellerIcon} />
            <Text style={styles.as}>AS</Text>
            <Image
              source={Dropdown}
              style={styles.Dropdown}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationContainer}>
            <View style={styles.notificationNum}>
              <Text style={styles.notificationText}>4</Text>
            </View>

            <Image source={bell} style={styles.notificationBell} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.raiseATicket,
            activeButton === "RaiseATicket" && styles.activeButton,
          ]}
          onPress={() => handleButtonClick("RaiseATicket")}
        >
          <Image
            source={RaiseATicket}
            style={[
              styles.RaiseATicketIcon,
              activeButton === "RaiseATicket" && styles.activeIcon,
            ]}
          />
          <Text
            style={[
              styles.RaiseATicketFont,
              activeButton === "RaiseATicket" && styles.activeText,
            ]}
          >
            Raise a Ticket
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.raiseATicket,
            activeButton === "GetQuote" && styles.activeButton,
          ]}
          onPress={() => handleButtonClick("GetQuote")}
        >
          <Image source={Plus} style={styles.RaiseATicketIcon} />
          <Text
            style={[
              styles.RaiseATicketFont,
              activeButton === "GetQuote" && styles.activeText,
            ]}
          >
            Get Quote
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.raiseATicket,
            activeButton === "CreateLead" && styles.activeButton,
          ]}
          onPress={() => handleButtonClick("CreateLead")}
        >
          <Image source={Plus} style={styles.RaiseATicketIcon} />
          <Text
            style={[
              styles.RaiseATicketFont,
              activeButton === "CreateLead" && styles.activeText,
            ]}
          >
            Create Lead
          </Text>
        </TouchableOpacity>
      </View>

       <View style={{ height: 56, paddingTop: 16 }}>
        {/* <Image source={searchIcon} style={styles.searchIcon}/> */}
         <TextInput
          placeholder="Search here.."
          style={styles.searchHere}
        />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    // borderWidth: 1,
    flexDirection: "column",
    gap: 12,
    display:"flex"
  },
  MainChild1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textView: {
    height: 48,
    width: 178.78,
  },
  salutationText: {
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 24.2,
    color: "#000",
    alignItems: "center",
  },
  mainChild2: {
    flexDirection: "row",
    gap: 23,
    paddingVertical: 8,
    paddingHorizontal: 12,
    // borderWidth:1,
  },
  touchableDropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#FFE7E5",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sellerIcon: {
    height: 14,
    width: 14,
  },
  as: {
    fontSize: 12.44,
    lineHeight: 13.69,
    fontWeight: "500",
    alignSelf: "center",
    color: "#C7222A",
  },
  Dropdown: {
    // borderWidth: 1,
    color: "#C7222A",
    width: 10,
    paddingRight: 2,
  },
  notificationNum: {
    zIndex: 1,
    height: 14,
    width: 14,
    backgroundColor: "#C7222A",
    top: 8,
    left: 9,
    borderRadius: 16,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBell: {
    // borderWidth:1,
    height: 22,
    width: 22,
    // top:9,
    // left:7
  },
  notificationText: {
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 12,
    color: "#FFF",
  },
  notificationContainer: {
    top: -10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "space-between",
  },
  raiseATicket: {
    flexDirection: "row",
    // borderWidth: 1,
    // width: 107,
    // height: 32,
    alignItems: "center",
    gap: 2,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 8,
    backgroundColor: "#C7222A",
  },
  RaiseATicketIcon: {
    height: 12.8,
    width: 12.8,
    tintColor: "#FFF",
  },
  RaiseATicketFont: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    alignSelf: "center",
    color: "#FFF",
  },

  activeButton: {
    backgroundColor: "#FFF",
    // borderColor: "#C7222A",
  },
  activeText: {
    color: "#C7222A",
  },
  activeIcon: {
    tintColor: "#C7222A",
  },
  searchHere:{
    
      backgroundColor: "#FFF",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      gap: 8,
      borderWidth: 1,
      borderColor: "#E6E6E6",
    
  },
  searchIcon: {
    zIndex: 1,
    height: 17.5,
    width: 17.5,
    top: 3,
    left: 3,
  },
});
