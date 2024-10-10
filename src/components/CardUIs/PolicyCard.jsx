import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/PolicyCard.style";
import STAR_ICON from "../../assets/AllQuotes/ProfileCardIcons/STAR_ICON.svg";
import EDIT_ICON from "../../assets/AllQuotes/ProfileCardIcons/EDIT_ICON.svg";
import REFRESH_ICON from "../../assets/AllQuotes/ProfileCardIcons/REFRESH_ICON.svg";
import KEBAB_MENU_ICON from "../../assets/AllQuotes/ProfileCardIcons/KEBAB_MENU_ICON.svg";
import ActionModal from "../Modal/ActionModal/ActionModal";

const PolicyCard = ({ policy }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.holderDetails}>
          <View style={styles.holderNameRow}>
            <Text style={styles.holderNameText}>{policy.name}</Text>
            <View style={styles.ratingContainer}>
              <STAR_ICON />
              <Text style={styles.holderRatingText}>{policy.rating}</Text>
            </View>
          </View>
          <Text style={styles.productText}>{policy.product}</Text>
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
        <View style={styles.rowContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>{"Policy Type"}</Text>
            <Text style={styles.detailValue}>{policy.policyType}</Text>
          </View>
          <View style={[styles.detailContainer, { width: 120 }]}>
            <Text style={styles.detailLabel}>{"Policy No."}</Text>
            <Text style={styles.detailValue}>{policy.policyNumber}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>{"Status"}</Text>
            <Text style={styles.detailValue}>{policy.status}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>{"Mobile No."}</Text>
            <Text style={styles.detailValue}>{policy.mobileNumber}</Text>
          </View>
          <View style={[styles.detailContainer, { width: 120 }]}>
            <Text style={styles.detailLabel}>{"Date of Renewal"}</Text>
            <Text style={styles.detailValue}>{policy.dateOfRenewal}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.premiumContainer}>
            <Text style={styles.detailLabel}>{"Renewal Premium"}</Text>
            <View style={styles.breakdownContainer}>
              <View style={{ gap: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.breakdownTextLabel}>
                    {"Total Premium"}
                  </Text>
                  <Text style={styles.breakdownTextValue}>
                    {policy.renewalPremium.totalPremium}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.breakdownTextBenefit}>
                    {"HR benefits"}
                  </Text>
                  <Text style={styles.breakdownValueBenefit}>
                    {policy.renewalPremium.hrBenefits}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.breakdownTextLabel}>
                  {"Renewal Premium"}
                </Text>
                <Text style={styles.breakdownTextValue}>
                  {policy.renewalPremium.renewalPremium}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.modificationContainer}>
            <Text style={styles.detailLabel}>{"Modification"}</Text>
            <Text style={styles.modificationText}>
              {policy.modification.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PolicyCard;
