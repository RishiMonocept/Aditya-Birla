import { FlatList, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./filterSlider.style";
import Pagination from "../Pagination/Pagination";

export const RendreItem = ({ item, selected, setSelected }) => {
  // console.log(selected);
  return (
    <TouchableOpacity
      key={item.index}
      style={{
        ...styles.mainContainer,
        backgroundColor: selected === item?.index ? "#FFE7E5" : "#E6E6E6",
        borderColor: selected === item?.index ? "#C7222A" : null,
        borderWidth: selected === item?.index ? 1 : null,
      }}
      onPress={() => setSelected(item?.index)}
    >
      <Text
        style={{
          ...styles.titleText,
          color: selected === item?.index ? "#9B4C44" : null,
        }}
      >
        {item?.item}
      </Text>
    </TouchableOpacity>
  );
};

const FilterSlide = () => {
  const data = ["My Performance", "Commision Report", "Leaderboard"];
  const [selected, setSelected] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={(item) => (
          <RendreItem
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        horizontal
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default FilterSlide;
