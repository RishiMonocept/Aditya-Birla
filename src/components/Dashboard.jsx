import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import icon from "../assets/Dashboard/AbhiSeller.png";
import Dropdown from "../assets/Dashboard/AbhiDropdown.png";
import bell from "../assets/Dashboard/AbhiBell.png";
import RaiseATicket from "../assets/Dashboard/RaiseATicket.png";
import Plus from "../assets/Dashboard/PlusIcon.png";
import searchIcon from "../assets/Dashboard/AbhiSearch.png";
import { LinearGradient } from "expo-linear-gradient";
import Explore from "../assets/Dashboard/ExploreMorebtn.png";
import LatestFromAbhiSlides from "./DashboardComponent/LatestFromAbhiSlides";
import noise from "../assets/Dashboard/noiseIcon.png";
import AbhiId from "../assets/Dashboard/AbhiId.png";
import notes from "../assets/Dashboard/notesIcon.png";
import pharmacy from "../assets/Dashboard/pharmacy.png";
import exploreMore from "../assets/Dashboard/ExploreMorebtn.png";
import PerformanceOverview from "./DashboardComponent/PerformanceOverview";
import ImportantTask from "./DashboardComponent/ImportantTask";
import ProgressMeter from "./Dashboard/ProgressMeter";

export default function Dashboard() {
  const data = [
    {
      id: "1",
      title: "Noise partnership",
      desc: "Partner with us to silence noise and \ncreate peaceful communities \nworldwide.",
      icon: noise,
      // exploreMore:exploreMore
    },
    {
      id: "2",
      title: "Pharmacy partnership",
      desc: "Partner with us to silence noise and \ncreate peaceful communities \nworldwide.",
      icon: pharmacy,
      exploreMore: exploreMore,
    },
    {
      id: "3",
      title: "New plan",
      desc: "Partner with us to silence noise and \ncreate peaceful communities \nworldwide.",
      icon: notes,
      exploreMore: exploreMore,
    },
    {
      id: "4",
      title: "ABHA ID",
      desc: "Partner with us to silence noise and \ncreate peaceful communities \nworldwide.",
      icon: AbhiId,
    },
  ];
  const [activeButton, setActiveButton] = useState("RaiseATicket");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
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
          <View style={styles.searchContainer}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput placeholder="Search here.." style={styles.searchHere} />
          </View>
        </View>
      </View>

      <ProgressMeter />

      {/* <ScrollView
        // style={{ marginHorizontal: -16 }}
        showsVerticalScrollIndicator={false}
      >
        <ImportantTask/>
        <View
          // colors={["#FFF5EC", "#FFFFFF"]}

          style={{
            borderColor: "red",
            gap: 32,
            // paddingHorizontal: 16,
            paddingBottom: 24,
            marginTop: 23,
            // borderWidth:1,
            backgroundColor: "#F7F7F7",
          }}
        >
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Latest from ABHI</Text>
            </View>
            <View style={styles.exploreContainer}>
              <Text style={styles.exploreText}>Explore More</Text>
              <Image
                source={Explore}
                style={styles.exploreIcon}
                resizeMode="contain"
              />
            </View>
          </View>
          <FlatList
            // style={{top:32}}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <LatestFromAbhiSlides
                icon={item.icon}
                exploreMore={item.exploreMore}
                title={item.title}
                desc={item.desc}
              />
            )}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ width: 17 }} />}
          />
        </View>

        <View
          style={{
            // borderWidth: 1,
            // borderColor:"red",
            marginTop: 22,
            paddingHorizontal: 22,
            paddingVertical: 16,
            backgroundColor: "#fff",
            gap: 12,
            // height:900
          }}
        >
          <PerformanceOverview />
        </View>
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    // borderWidth: 1,
    flexDirection: "column",
    gap: 12,
    display: "flex",
    marginBottom: 23,
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
  searchContainer: {
    // height: 56,
    paddingHorizontal: 12,
    // paddingVertical:8,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    gap: 8,

    shadowColor: "#5680B3",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
  },
  searchIcon: {
    width: 17.5,
    height: 17.5,
  },
  searchHere: {
    flex: 1,
    fontSize: 12,
    paddingLeft: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  headerContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    // top: 18,
    paddingTop: 18,
  },
  titleContainer: {
    // borderWidth: 1,
    width: "62%",
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  exploreContainer: {
    // borderWidth: 1,
    width: "34%",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  exploreText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: "#C7222A",
  },
  exploreIcon: {
    width: 6.67,
    width: 4.3,
  },
});
