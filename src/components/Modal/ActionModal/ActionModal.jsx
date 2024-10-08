import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ActionModalData from "./ActionData.json"
import { borderRadius, spacing } from "../../../res/dimension";
import colors from "../../../res/theme/colors";
import CROSS_ICON from "../../../assets/AllQuotes/crossIcon.svg";
import DOWNLOAD_ICON from "../../../assets/AllQuotes/downloadIcon.svg";
import DELETE_ICON from "../../../assets/AllQuotes/deleteIcon.svg";
import SHAREVIAEMAIL_ICON from "../../../assets/AllQuotes/shareViaEmail.svg";
import CREATEAUTODEBIT_ICON from "../../../assets/AllQuotes/createAutoDebit.svg";
import SENDRENEWABLENOTICE_ICON from "../../../assets/AllQuotes/sendRenewableNotice.svg";
import { fontSize, fontWeight, lineHeight } from "../../../res/theme/fonts";
import ActionButton from "./ActionButton";

const top = "29%";
export default function ActionModal({ openModal, setOpenModal }) {
  const { height } = Dimensions.get("screen");
  const percentage = parseFloat(top.replace("%", "")) / 100;
  const openHeight = height * percentage;

//   const actionData = [
//     { id: "1", name: "Download", icon: "DOWNLOAD_ICON" },
//     { id: "2", name: "Delete", icon: "DELETE_ICON" },
//     { id: "3", name: "Share via email", icon: "SHAREVIAEMAIL_ICON" },
//     { id: "4", name: "Send Renewal Notice", icon: "SENDRENEWABLENOTICE_ICON" },
//     {
//       id: "5",
//       name: "Create Auto-Debit Registration Link",
//       icon: "CREATEAUTODEBIT_ICON",
//     },
//   ];

  const iconMaping = {
    DOWNLOAD_ICON: <DOWNLOAD_ICON />,
    DELETE_ICON: <DELETE_ICON />,
    SHAREVIAEMAIL_ICON: <SHAREVIAEMAIL_ICON />,
    SENDRENEWABLENOTICE_ICON: <SENDRENEWABLENOTICE_ICON />,
    CREATEAUTODEBIT_ICON: <CREATEAUTODEBIT_ICON />,
  };

  return (
    <Modal
      visible={openModal}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={[styles.mainContainer, { top: openHeight }]}>
          <View style={styles.actionContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.ActionText}>Action</Text>
              <TouchableOpacity
                style={styles.crossIcon}
                onPress={() => setOpenModal(false)}
              >
                <CROSS_ICON />
              </TouchableOpacity>
            </View>
            <View style={styles.mainActionContainer}>
              {ActionModalData.map((item) => (
                <ActionButton
                  key={item.id}
                  title={item.name}
                  icon={iconMaping[item.icon]}
                />
              ))}

              {/* <ActionButton title={"Download"} icon={<DOWNLOAD_ICON />} />
              <ActionButton title={"Delete"} icon={<DELETE_ICON />} />
              <ActionButton
                title={"Share via email"}
                icon={<SHAREVIAEMAIL_ICON />}
              />
              <ActionButton
                title={"Send Renewal Notice"}
                icon={<SENDRENEWABLENOTICE_ICON />}
              />
              <ActionButton
                title={"Create Auto-Debit Registration Link"}
                icon={<CREATEAUTODEBIT_ICON />}
              /> */}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  mainContainer: {
    paddingTop: spacing.space_m5,
    paddingLeft: spacing.space_m3,
    paddingRight: spacing.space_m3,
    paddingBottom: spacing.space_l3,
    gap: spacing.space_10,
    backgroundColor: colors.primaryColors.lightShadeGray,
    // backgroundColor: "red",
    borderTopLeftRadius: borderRadius.borderRadius12,
    borderTopRightRadius: borderRadius.borderRadius12,
  },
  actionContainer: {
    gap: spacing.space_l1,
  },
  topContainer: {
    flexDirection: "row",
    gap: spacing.space_l1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  ActionText: {
    fontSize: fontSize.font22,
    fontWeight: fontWeight.weight600,
    lineHeight: lineHeight.lineHeight28,
  },
  crossIcon: {
    height: spacing.space_22,
    width: spacing.space_22,
    alignItems: "center",
    justifyContent: "center",
  },
  mainActionContainer: {
    gap: spacing.space_s2,
  },
});
