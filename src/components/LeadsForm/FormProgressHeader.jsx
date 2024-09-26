import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import SingleProgressBar from "./SingleProgressBar";

export default function FormProgressHeader() {
  const screenWidth = Dimensions.get("window").width - 16;

  const DATA = [
    { id: "1", title: "First Card", description: "This is the first card." },
    { id: "2", title: "Second Card", description: "This is the second card." },
    { id: "3", title: "Third Card", description: "This is the third card." },
    { id: "4", title: "Fourth Card", description: "This is the fourth card." },
    { id: "5", title: "Fifth Card", description: "This is the fifth card." },
    { id: "6", title: "Sixth Card", description: "This is the sixth card." },
    {
      id: "7",
      title: "Seventh Card",
      description: "This is the seventh card.",
    },
    // { id: "9", title: "Ninth Card", description: "This is the ninth card." },
    // { id: "10", title: "Tenth Card", description: "This is the tenth card." },
  ];

  const progressBarWidth = screenWidth / DATA.length - 10;

  return (
    <View style={{ gap: 8 }}>
      <View style={{ height: 17, width: 36 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            lineHeight: 16.8,
            color: "#0A6A34",
          }}
        >
          Leads
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
          width: "100%",
        }}
      >
        {DATA.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SingleProgressBar item={item} width={progressBarWidth} />
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}
