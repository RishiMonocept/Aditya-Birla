import React from "react";
import { FlatList, ScrollView } from "react-native";
import Card from "./Card";
import eventsData from "./eventNotifications.json";

const Index = () => {
  return (
    <ScrollView>
      {eventsData.map((item) => {
        <Card
          title={item.title}
        //   Tu push krde m dekhta hu apne usme leke 
          date={item.date}
          icon={item.icon}
          key={item.id}
        />;
      })}
    </ScrollView>
  );
};

export default Index;
