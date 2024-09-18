import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import jsonData from "./data.json";
import { styles } from "./AllReportsData.style.js";
import EDIT from "../../assets/BottomTab/edit_icon.png";
import Pagination from "../Pagination/Pagination.jsx";

export default function AllReportsCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => setCurrentPage(page);

  const renderItem = useCallback(({ item }) => {
    return (
      <View
        style={{
          ...styles.mainContainer,
          marginBottom: item.id === 3 && 30,
        }}
      >
        <View style={styles.child1}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.numberText}>{item.number}</Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Image source={EDIT} style={{ width: "100%", height: "100%" }} />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.child2}>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Agent Code</Text>
              <Text style={styles.agentcode}>{item.agentCode}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Client ID</Text>
              <Text style={styles.agentcode}>{item.agentId}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Insured Name</Text>
              <Text style={styles.agentcode}>{item.enduredNo}</Text>
            </View>
          </View>

          <View style={styles.child2}>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Business Type</Text>
              <Text style={styles.agentcode}>{item.agentCode}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Product Name</Text>
              <Text style={styles.agentcode}>{item.businessType}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Policy Number</Text>
              <Text style={styles.agentcode}>{item.policyNumber}</Text>
            </View>
          </View>

          <View style={styles.child2}>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Policy Start Type</Text>
              <Text style={styles.agentcode}>{item.policyStartType}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}>Policy End Type</Text>
              <Text style={styles.agentcode}>{item.policyEndType}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Agent}></Text>
              <Text style={styles.agentcode}></Text>
            </View>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={jsonData.agent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={{ marginBottom: 10 }}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </View>
  );
}
