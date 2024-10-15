import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/UserQuotesCard.style"; // Ensure this points to the correct styles file
import STAR_ICON from "../../assets/AllQuotes/ProfileCardIcons/STAR_ICON.svg";
import EDIT_ICON from "../../assets/AllQuotes/ProfileCardIcons/EDIT_ICON.svg";
import REFRESH_ICON from "../../assets/AllQuotes/ProfileCardIcons/REFRESH_ICON.svg";
import KEBAB_MENU_ICON from "../../assets/AllQuotes/ProfileCardIcons/KEBAB_MENU_ICON.svg";
import ActionModal from "../Modal/ActionModal/ActionModal";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";

const UserQuotesCard = ({ policy }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.holderDetails}>
          <View style={styles.holderNameRow}>
            <Text style={styles.holderNameText}>{policy.quoteType}</Text>
          </View>
          <Text style={styles.productText}>{policy.subQuote}</Text>
        </View>
        <View style={styles.iconActionsContainer}>
          <TouchableOpacity
            onPress={() => {
              /* Handle edit icon press */
            }}
          >
            <EDIT_ICON />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Handle refresh icon press */
            }}
          >
            <REFRESH_ICON />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <KEBAB_MENU_ICON />
          </TouchableOpacity>
          <ActionModal openModal={openModal} setOpenModal={setOpenModal} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={{ gap: verticalScale(14) }}>
          <View style={styles.rowContainer}>
            <View style={[styles.detailContainer, { width: scale(100) }]}>
              <Text style={styles.detailLabel}>{"Product"}</Text>
              <Text style={styles.detailValue}>{policy.product}</Text>
            </View>
            <View style={[styles.detailContainer, { width: scale(120) }]}>
              <Text style={styles.detailLabel}>{"Policy No."}</Text>
              <Text style={styles.detailValue}>{policy.policyNumber}</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailLabel}>{"Proposer"}</Text>
              <Text style={styles.detailValue}>{policy.proposer}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={[styles.detailContainer, { width: scale(100) }]}>
              <Text style={styles.detailLabel}>{"Renewal Premium"}</Text>
              <Text style={styles.detailValue}>
                {policy.renewalPremium.amount}
              </Text>
              <Text style={styles.breakdownValueBenefit}>
                {policy.renewalPremium.hrBenefits}
              </Text>
            </View>
            <View style={[styles.detailContainer, { width: scale(120) }]}>
              <Text style={styles.detailLabel}>{"Mobile No."}</Text>
              <Text style={styles.detailValue}>{policy.mobileNumber}</Text>
            </View>
            <View style={[styles.detailContainer, { width: scale(120) }]}>
              <Text style={styles.detailLabel}>{"Date of Renewal"}</Text>
              <Text style={styles.detailValue}>{policy.dateOfRenewal}</Text>
            </View>
          </View>
          <View style={styles.btmRow}>
            <View style={styles.modifiedLabel}>
              <Text style={styles.modifiedText}>{"Modified"}</Text>
            </View>
            <View style={{ width: scale(128) }}>
              <Text style={styles.detailLabel}>{"Member"}</Text>
              <Text style={styles.detailValue}>
                {policy.modification.members}
              </Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>{"Tenure"}</Text>
              <Text style={styles.detailValue}>
                {policy.modification.tenure}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserQuotesCard;
