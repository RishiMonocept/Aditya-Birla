import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { fontSize, fontWeight, lineHeight } from "../../res/theme/fonts";
import {
  spacing,
  borderRadius,
  shadowOpacityElevation,
  ShadowRadius,
} from "../../res/dimension.js";
import colors from "../../res/theme/colors.js";
import star from "../../assets/Dashboard/star.png";
import ImportantTaskCard from "./ImportantTaskCard.jsx";

export default function ImportantTask() {
  const importantTasksData = [
    {
      id: "1",
      header: "Important Tasks",
      targetMessage: "Do this to achieve 75% of your target",
      taskHeader: "Task header",
      taskSubHeader: "Task sub-header",
      icon: star,
    },
    {
      id: "2",
      header: "Important Tasks",
      targetMessage: "Do this to achieve 75% of your target",
      taskHeader: "Task header",
      taskSubHeader: "Task sub-header",
      icon: star,
    },
    {
      id: "3",
      header: "Important Tasks",
      targetMessage: "Do this to achieve 75% of your target",
      taskHeader: "Task header",
      taskSubHeader: "Task sub-header",
      icon: star,
    },
    {
      id: "4",
      header: "Important Tasks",
      targetMessage: "Do this to achieve 75% of your target",
      taskHeader: "Task header",
      taskSubHeader: "Task sub-header",
      icon: star,
    },
  ];

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.ImportantTaskText}>Important tasks</Text>

      <FlatList
        data={importantTasksData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImportantTaskCard
            icon={item.icon}
            textmessage={item.targetMessage}
            taskheader={item.taskHeader}
            tasksubheader={item.taskSubHeader}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    gap: spacing.space_m2,
    borderWidth: spacing.space_s1,
    borderColor: colors.primaryColors.white,
    backgroundColor: colors.primaryColors.warmIvory,
    borderRadius: borderRadius.borderRadius12,
    opacity: shadowOpacityElevation.opacity1,
    paddingBottom: spacing.space_m4,
    paddingLeft: spacing.space_m4,
    paddingTop: spacing.space_m4,
    // flex:1
  },
  ImportantTaskText: {
    fontSize: fontSize.font25,
    lineHeight: lineHeight.lineHeight36,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.black,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
    textShadowColor: colors.primaryColors.white,
    textShadowRadius: ShadowRadius.shadowRadius2,
  },
  achievetarget: {
    paddingRight: spacing.space_m2,
    paddingBottom: spacing.space_m1,
    paddingLeft: spacing.space_m2,
    gap: spacing.space_base,
    borderWidth: spacing.space_s1,
    backgroundColor: colors.primaryColors.white,
    borderColor: colors.primaryColors.white,
    borderRadius: spacing.space_base,
    shadowColor: colors.primaryColors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: spacing.space_m2,
    elevation: shadowOpacityElevation.elevation5,
  },
  starHeadline: {
    paddingHorizontal: spacing.space_base,
    paddingVertical: spacing.space_s2,
    gap: spacing.space_s2,
    backgroundColor: colors.primaryColors.warmIvory,
    borderBottomRightRadius: borderRadius.borderRadius8,
    borderBottomLeftRadius: borderRadius.borderRadius8,
    flexDirection: "row",
    alignSelf: "center",
  },
  textTarget: {
    fontSize: fontSize.font12,
    lineHeight: lineHeight.lineHeight14dot4,
    fontWeight: fontWeight.weight600,
    Color: colors.primaryColors.naturalGray,
  },
  taskHeaderText: {
    fontSize: fontSize.font18,
    lineHeight: lineHeight.lineHeight21dot6,
    fontWeight: fontWeight.weight600,
    color: colors.primaryColors.naturalGray,
  },
  subtasktext: {
    fontSize: fontSize.font16,
    lineHeight: lineHeight.lineHeight16dot8,
    fontWeight: fontWeight.weight400,
    color: colors.primaryColors.black,
  },
});

{
  /* <View style={styles.achievetarget}>
        <View style={styles.starHeadline}>
          <Image
            style={{ height: 11, width: 11 }}
            source={icon}
            resizeMethod="contain"
          />
          <Text style={styles.textTarget}>{textmessage}</Text>
          <Image
            style={{ height: 11, width: 11 }}
            source={icon}
            resizeMethod="contain"
          />
        </View>
        <Text style={styles.taskHeaderText}>{taskheader}</Text>
        <Text style={styles.subtasktext}>{tasksubheader}</Text>
      </View> */
}
