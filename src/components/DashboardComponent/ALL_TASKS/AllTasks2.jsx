import { FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import ToggleList1 from "../../ToggleList/ToggleList1";
import OpenWonSubHeader from "../../SubHeaders/OpenWonSubHeader";
import avatarImage from "../../../assets/Dashboard/ALL_TASKS/Avatar.png";
import { styles } from "./AllTasks2.style";
import OpenTaskCard from "../../CardUIs/OpenTaskCard";
import WonTaskCard from "../../CardUIs/WonTaskCard";

export default function AllTasks2() {
  const toggleItemListData = ["Leads", "Renewals", "Proposal"];
  const [selectedItem, setSelectedItem] = useState("Leads");

  const [activeOpenDropDownCard, setActiveOpenDropDownCard] = useState(null);
  const [activeWonDropDownCard, setActiveWonDropDownCard] = useState(null); // State for WonCard dropdown

  const toggleHandler = (item) => {
    setSelectedItem(item);
  };

  const openDataTemplate = {
    id: 1,
    name: "Amit Kumar",
    profileImage: avatarImage,
    status: [
      { label: "Member details pending", completed: false },
      { label: "Payment successful", completed: true },
      { label: "Lead created", completed: true },
    ],
  };

  const [openData, setOpenData] = useState(
    Array(6)
      .fill(0)
      .map((_, index) => ({ ...openDataTemplate, id: index + 1 }))
  );

  const wonDataTemplate = {
    id: 1,
    name: "Surendra Jain",
    profileImage: avatarImage,
    taskStatus: [
      { label: "Nominee details pending", completed: false },
      { label: "Payment pending", completed: false },
      { label: "Lead created", completed: true },
    ],
    additionalInfo: {
      icon: "BOLT_ICON",
      message: "Your customer's payment had failed! Get them to retry payment.",
      actionText: "Resend payment link to Rohini",
    },
  };

  const [wonData, setWonData] = useState(
    Array(6)
      .fill(0)
      .map((_, index) => ({ ...wonDataTemplate, id: index + 1 }))
  );

  const updateOpenCompletionStatus = (cardIndex, statusIndex) => {
    setOpenData((prevData) => {
      const newData = [...prevData];
      const card = newData[cardIndex];
      if (card) {
        const updatedStatus = card.status.map((item, index) =>
          index === statusIndex ? { ...item, completed: !item.completed } : item
        );
        newData[cardIndex] = { ...card, status: updatedStatus };
      }
      return newData;
    });
  };

  const updateWonCompletionStatus = (cardIndex, statusIndex) => {
    setWonData((prevData) => {
      const newData = [...prevData];
      const card = newData[cardIndex];
      if (card) {
        const updatedTaskStatus = card.taskStatus.map((item, index) =>
          index === statusIndex ? { ...item, completed: !item.completed } : item
        );
        newData[cardIndex] = { ...card, taskStatus: updatedTaskStatus };
      }
      return newData;
    });
  };

  const toggleOpenDropDown = (cardId) => {
    setActiveOpenDropDownCard((prevCardId) =>
      prevCardId === cardId ? null : cardId
    );
  };

  const toggleWonDropDown = (cardId) => {
    setActiveWonDropDownCard((prevCardId) =>
      prevCardId === cardId ? null : cardId
    );
  };

  const renderWonItem = ({ item, index }) => (
    <WonTaskCard
      name={item.name}
      profileImage={item.profileImage}
      status={item.taskStatus} // Make sure to pass the correct prop
      updateCompletionStatus={updateWonCompletionStatus}
      mainIndex={index}
      isDropDownOpen={activeWonDropDownCard === item.id} // Check for activeWonDropDownCard
      toggleDropDown={() => toggleWonDropDown(item.id)} // Pass the function to toggle the dropdown
      additionalInfo={item.additionalInfo}
    />
  );

  const renderOpenItem = ({ item, index }) => (
    <OpenTaskCard
      name={item.name}
      profileImage={item.profileImage}
      status={item.status}
      updateCompletionStatus={updateOpenCompletionStatus}
      mainIndex={index}
      isDropDownOpen={activeOpenDropDownCard === item.id}
      toggleDropDown={() => toggleOpenDropDown(item.id)}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <ToggleList1
        toggleItemList={toggleItemListData}
        toggleHandler={toggleHandler}
        selectedItem={selectedItem}
      />
      {selectedItem === "Leads" && (
        <>
          <View style={styles.leadsContainer}>
            <OpenWonSubHeader label={"Open"} value={"18"} color={"#E1E4E8"} />
            <FlatList
              data={openData}
              renderItem={renderOpenItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ gap: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.leadsContainer}>
            <OpenWonSubHeader label={"Won"} value={"6"} color={"#D0F1E5"} />
            <FlatList
              data={wonData}
              renderItem={renderWonItem} // Use the renderWonItem function
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ gap: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      )}

      {selectedItem === "Renewals" && (
        <View>
          <Text>Renewals View</Text>
        </View>
      )}
      {selectedItem === "Proposal" && (
        <View>
          <Text>Proposal View</Text>
        </View>
      )}
    </View>
  );
}
