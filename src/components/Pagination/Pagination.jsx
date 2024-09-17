// Pagination.js
import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import LEFT from "../../assets/Pagination/LeftArrow.png";
import RIGHT from "../../assets/Pagination/RightArrow.png";
import { styles } from "./pagination.style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 6;
  const halfRange = Math.floor(pagesToShow / 2);

  // Determine start and end pages
  let startPage = Math.max(currentPage - halfRange, 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  // Callback to handle page change
  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages]
  );

  // Handle ellipsis click
  const handleEllipsisClick = () => {
    const nextPage =
      currentPage + (pagesToShow - (currentPage % pagesToShow) + 1);
    onPageChange(nextPage);
  };

  return (
    <View style={styles.container}>
      {/* Left arrow */}
      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: currentPage !== 1 ? "#c7222a" : "#AFB3C0" },
        ]}
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          source={LEFT}
          style={{ tintColor: currentPage !== 1 ? "#C7222A" : "#979CAE" }}
        />
      </TouchableOpacity>

      {/* Page numbers */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pageContainer}
      >
        {startPage > 1 && (
          <TouchableOpacity
            style={[styles.pageButton, { borderColor: "#C0C5CA" }]}
            onPress={handleEllipsisClick}
          >
            <Text style={[styles.pageButtonText, styles.ellipsis]}>...</Text>
          </TouchableOpacity>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <TouchableOpacity
            key={startPage + index}
            style={[
              styles.pageButton,
              currentPage === startPage + index
                ? { backgroundColor: "#C7222A", borderColor: "#C7222A" }
                : { borderColor: "#c0c5ca" },
            ]}
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
          <TouchableOpacity
            style={[styles.pageButton, { borderColor: "#C0C5CA" }]}
            onPress={handleEllipsisClick}
          >
            <Text style={[styles.pageButtonText, styles.ellipsis]}>...</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Right arrow */}
      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: currentPage !== totalPages ? "#C7222A" : "#AFB3C0" },
        ]}
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
