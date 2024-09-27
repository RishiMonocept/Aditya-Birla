import { StyleSheet } from "react-native";
import { borderRadius } from "../../../res/dimension";
import { fontSize } from "../../../res/theme/fonts";
export const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "#ffffff",
    gap: 32,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: borderRadius.borderRadius16,
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 22,
    backgroundColor: "#ffffff",
  },
  itemDetailsView: {
    gap: 13,
  },
  itemTitle: {
    fontWeight: "600",
    fontSize: fontSize.font18,
    lineHeight: 24,
  },
});
