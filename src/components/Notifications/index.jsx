import { FlatList } from "react-native";
import React from "react";
import data from "./eventNotifications.json";
import NotificationsCard from "./Card";

const NotificationsList = () => {
  const length = data.events.length;
  return (
    <FlatList
      style={{ height: "74%" }}
      data={data.events}
      renderItem={(item) => <NotificationsCard item={item} length={length} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotificationsList;
