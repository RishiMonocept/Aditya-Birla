import { Dimensions, StyleSheet } from "react-native";
import { fontSize } from "../../../res/theme/fonts";
import { spacing } from "../../../res/dimension";

const { width, height } = Dimensions.get("window");
const radius = Math.min(width, height) * 0.4;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  gauge: {
    overflow: "visible",
    position: "relative",
  },
  halfCircleBorder: {
    position: "absolute",
    width: "70%",
    height: "70%",
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    backgroundColor: "#E6E6E6",
    bottom: 0,
    marginLeft: "15%",
  },
  halfCircleBorder2: {
    position: "absolute",
    width: "56%",
    height: "56%",
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    backgroundColor: "#fff",
    bottom: 0,
    marginLeft: "22%",
    shadowColor: "#0000000A",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 12,
    paddingTop: spacing.space_s2,
    alignItems: "center",
    justifyContent: "center",
  },
  needle: {
    position: "absolute",
    width: spacing.space_s3,
    borderWidth: 2,
    borderColor: "#e6e6e6",
    borderTopRightRadius: spacing.space_10,
    borderTopLeftRadius: spacing.space_10,
    left: "49%",
    transformOrigin: "bottom",
    top: "-50%",
  },
  chartTitle: {
    fontSize: fontSize.font20,
    lineHeight: fontSize.font25,
    fontWeight: "600",
    color: "#767D93",
    marginBottom: -spacing.space_s2,
  },
  chartSubtitle: {
    fontSize: fontSize.font12,
    color: "#767D93",
    fontSize: fontSize.font12,
  },
});
