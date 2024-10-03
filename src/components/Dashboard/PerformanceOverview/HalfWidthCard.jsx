// HalfWidthCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { spacing } from "../../../res/dimension";
import { fontSize, fontSize14, lineHeight } from "../../../res/theme/fonts";
import { styles } from "./halfWidthCard.style";

const HalfWidthCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.icon }} style={styles.icon} />
      <Text style={styles.title}>{data.title}</Text>
      {data.ammount && <Text style={styles.amount}>{data.ammount}</Text>}
      {data.progressTitle && (
        <Text style={styles.progress}>{data.progressTitle}</Text>
      )}
      {data.notificationTabDescription && (
        <Text style={styles.notification}>
          {data.notificationTabDescription}
        </Text>
      )}
      {data.notificationTabLinkDescription && (
        <Text style={styles.link}>{data.notificationTabLinkDescription}</Text>
      )}
    </View>
  );
};



export default HalfWidthCard;
