import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ToggleList1({
  toggleItemList,
  toggleHandler,
  selectedItem,
}) {
  const renderToggleItem = ({ item }) => {
    const isSelected = item === selectedItem;

    return (
      <TouchableOpacity
        style={[styles.renderItemContainer, isSelected && styles.selectedItem]}
        onPress={() => toggleHandler(item)}
      >
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={toggleItemList}
        renderItem={renderToggleItem}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ gap: 8 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1
  },
  renderItemContainer: {
    justifyContent: "center",
    borderRadius: 16,
    gap: 10,
    paddingTop: 9,
    paddingHorizontal: 12,
    paddingBottom: 7,
    backgroundColor: "#F1F3F6",
    borderWidth: 1,
  },
  selectedItem: {
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 7,
    paddingHorizontal: 15,
    gap: 8,
    borderWidth: 1,
    borderColor: "#C7222A",
    backgroundColor: "#FFE7E5",
  },
  text: {
    textAlign: "center",
    lineHeight: 12,
    fontSize: 12,
    fontWeight: "500",
  },
  selectedText: {
    textAlign: "center",
    color: "#9B4C44",
    lineHeight: 12,
    fontSize: 12,
    fontWeight: "500",
  },
});
