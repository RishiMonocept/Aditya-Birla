import { StyleSheet, Text, View } from "react-native";
import React from "react";

// icon
import NO_DATA_FOUND from "../../assets/AllQuotes/noDataFound/NoDataFound.svg";
import { fontSize } from "../../res/theme/fonts";

const NoDataFoundPage = () => {
  return (
    <View style={styles.container}>
      <NO_DATA_FOUND />
      <View>
        <Text style={styles.text}>No data found</Text>
      </View>
    </View>
  );
};

export default NoDataFoundPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#979CAE",
    fontWeight: "400",
    fontSize: fontSize.font20,
  },
});
