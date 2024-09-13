import { View, Text } from "react-native";
import React from "react";
import { styles } from "./card.style";

const ActivityCard = ({ item, length }) => {
  return (
    <View
      style={{
        ...styles.mainConatiner,
        marginBottom: item?.item?.id === length ? 300 : null,
      }}
    >
      <View style={styles.titleDateContainer}>
        <Text style={styles.titleText}>{item?.item?.title}</Text>
        <Text style={styles.dateText}>{item?.item?.date}</Text>
      </View>

      <View style={styles.descriptionText}>
        <Text>{item?.item?.description}</Text>
      </View>
    </View>
  );
};

export default ActivityCard;
