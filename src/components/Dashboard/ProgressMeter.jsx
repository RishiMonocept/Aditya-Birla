import { View, Text } from "react-native";
import React from "react";
import GaugeChart from "./GaugeChart";

const ProgressMeter = () => {
  return (
    <View>
      {/* <Text>Hello</Text> */}
      <GaugeChart value={90} maxValue={100} height={70} width={140} />
    </View>
  );
};

export default ProgressMeter;
