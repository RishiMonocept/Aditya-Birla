import { View, Text, FlatList } from "react-native";
import React from "react";
import data from "./eventActivitys.json";
import ActivityCard from "./Card";

const ActivitiesList = () => {
  const length = data.events.length;
  return (
    <FlatList
      style={{ height: "74%" }}
      data={data.events}
      renderItem={(item) => <ActivityCard item={item} length={length} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ActivitiesList;
