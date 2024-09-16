import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import jsonData from "./data.json";
import { styles } from "./style.jsx";

export default function All_Reports_Card() {
  return (
    <ScrollView style={styles.outerContainer}>
      {/* <Text>All_Reports_Card</Text> */}
      <FlatList
        data={jsonData.agent}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => {
          console.log(item);
          return (
            <View style={styles.mainContainer}>
              <View style={styles.child1}>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{item?.item?.name}</Text>
                  <Text style={styles.numberText}>{item.item.number}</Text>
                </View>
                <View style={styles.logoContainer}>
                  <TouchableOpacity style={styles.icon}>
                    <Image
                      source={require("../../assets/edit_icon.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={styles.child2}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Agent Code</Text>
                    <Text style={styles.agentcode}>{item.item.agentCode}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Client ID</Text>
                    <Text style={styles.agentcode}>{item.item.agentId}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Insured Name</Text>
                    <Text style={styles.agentcode}>{item.item.enduredNo}</Text>
                  </View>
                </View>
                <View style={styles.child2}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Business Type</Text>
                    <Text style={styles.agentcode}>{item.item.agentCode}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Product Name</Text>
                    <Text style={styles.agentcode}>
                      {item.item.businessType}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Policy Number</Text>
                    <Text style={styles.agentcode}>
                      {item.item.policyNumber}
                    </Text>
                  </View>
                </View>
                <View style={styles.child2}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Policy Start Type</Text>
                    <Text style={styles.agentcode}>
                      {item.item.policyStartType}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}>Policy End Type</Text>
                    <Text style={styles.agentcode}>
                      {item.item.policyEndType}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.Agent}></Text>
                    <Text style={styles.agentcode}></Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
}
