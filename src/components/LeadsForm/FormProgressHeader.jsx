import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import SingleProgressBar from "./SingleProgressBar";

export default function FormProgressHeader() {
  const screenWidth = Dimensions.get("window").width - 16;

  const DATA = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    // { id: "9", title: "Ninth Card", description: "This is the ninth card." },
    // { id: "10", title: "Tenth Card", description: "This is the tenth card." },
  ];

  const progressBarWidth = screenWidth / DATA.length - 10;

  return (
    <View style={{ gap: 8 }}>
      <View>
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
