import { StyleSheet } from "react-native";
import { spacing } from "../../../../res/dimension";

export const styles = StyleSheet.create({
  halfWidthContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: spacing.space_base,
  },
});
