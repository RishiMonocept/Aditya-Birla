import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./AllTasks2.style";
import ToggleList1 from "../../ToggleList/ToggleList1";

export default function AllTasks2() {
  const toggleItemListData = ["Leads", "Renewals", "Proposal"];
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleHandler = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.mainContainer}>
      <ToggleList1
        toggleItemList={toggleItemListData}
        toggleHandler={toggleHandler}
        selectedItem={selectedItem}
      />

      {selectedItem === "Leads" && (
        <View>
          <Text>Leads View</Text>
        </View>
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
