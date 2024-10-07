import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./filters.style";

const Filters = ({
  data: { title, filters },
  selectedFilter,
  setSelectedFilter,
}) => {
  useEffect(() => {
    if (filters.length > 0) {
      setSelectedFilter(filters[0]);
    }
  }, [filters]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.filtersContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filter,
              selectedFilter === filter && styles.selectedFilter,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Filters;
