// Pagination.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import LEFT from "../../assets/Pagination/LeftArrow.png";
import RIGHT from "../../assets/Pagination/RightArrow.png";
import { styles } from "./pagination.style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 6;
  const halfRange = Math.floor(pagesToShow / 2);

  // Determine the start and end page numbers
  let startPage = Math.max(currentPage - halfRange, 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleEllipsisClick = (currentPage, windowSize) => {
    const nextPage =
      currentPage + (windowSize - (currentPage % windowSize) + 1);
    onPageChange(nextPage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.button,
          borderColor: currentPage !== 1 ? "#c7222a" : "#AFB3C0",
        }}
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          source={LEFT}
          style={{
            tintColor: currentPage !== 1 ? "#C7222A" : "#979CAE",
          }}
        />
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pageContainer}
      >
        {startPage > 1 && (
          <>
            <TouchableOpacity
              style={{ ...styles.pageButton, borderColor: "#C0C5CA" }}
              onPress={() => handlePageChange(currentPage - 1)}
            >
              <Text style={[styles.pageButtonText, styles.ellipsis]}>...</Text>
            </TouchableOpacity>
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <TouchableOpacity
            key={startPage + index}
            style={{
              ...styles.pageButton,
              backgroundColor:
                currentPage === startPage + index ? "#C7222A" : null,
              borderColor:
                currentPage === startPage + index ? "#C7222A" : "#c0c5ca",
            }}
            onPress={() => handlePageChange(startPage + index)}
          >
            <Text
              style={[
                styles.pageButtonText,
                currentPage === startPage + index &&
                  styles.activePageButtonText,
              ]}
            >
              {startPage + index}
            </Text>
          </TouchableOpacity>
        ))}

        {endPage < totalPages && (
          <>
            <TouchableOpacity
              style={{ ...styles.pageButton, borderColor: "#C0C5CA" }}
              onPress={() => handleEllipsisClick(currentPage, 6)}
            >
              <Text style={[styles.pageButtonText, styles.ellipsis]}>...</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      <TouchableOpacity
        style={{
          ...styles.button,
          borderColor: currentPage !== totalPages ? "#C7222A" : "#AFB3C0",
        }}
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image
          source={RIGHT}
          style={{
            tintColor: currentPage !== totalPages ? "#C7222A" : "#979CAE",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
