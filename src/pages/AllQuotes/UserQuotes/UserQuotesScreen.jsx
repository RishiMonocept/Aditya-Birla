import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./UserQuotesScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";

//data
import UserQuotesData from "./UserQuotesData.json";
import avatarImage from "../../../assets/Dashboard/ALL_TASKS/Avatar.png";

//icons
import OPTION from "../../../assets/AllQuotes/Option.svg";
import HOME_INDICATOR from "../../../assets/AllQuotes/HomeIndicator.svg";
import DOWNLOAD_ICON from "../../../assets/DOWNLOAD_ICON.svg";

import UserQuotesCard from "../../../components/CardUIs/UserQuotesCard";

export default function UserQuotesScreen({ route }) {
  const { policy } = route.params; //TODO : for id mapping of user
  const [toggle, setToggle] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperView}>
          <View style={{ gap: 22 }}>
            <View style={styles.header}>
              <Image source={avatarImage} style={styles.profileImage} />
              <Text style={styles.name}>{"{User_Name}'s Quotes"}</Text>
            </View>
            <View style={styles.topBar}>
              <TouchableOpacity style={styles.downLoadIcon}>
                <DOWNLOAD_ICON />
              </TouchableOpacity>
              <View style={styles.toggleMenu}>
                <TouchableOpacity
                  style={[
                    styles.homeBtn,
                    { backgroundColor: toggle ? "#C7222A" : "#ffffff" },
                  ]}
                  onPress={() => setToggle(!toggle)}
                >
                  <HOME_INDICATOR />
                  <Text
                    style={[
                      styles.topBarText,
                      { color: toggle ? "#ffffff" : "#4C4C4C" },
                    ]}
                  >
                    {"Grid View"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.homeBtn,
                    {
                      backgroundColor: !toggle ? "#C7222A" : "#ffffff",
                      gap: 10,
                    },
                  ]}
                  onPress={() => setToggle(!toggle)}
                >
                  <OPTION />
                  <Text
                    style={[
                      styles.topBarText,
                      { color: !toggle ? "#ffffff" : "#4C4C4C" },
                    ]}
                  >
                    {"List View"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={UserQuotesData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <UserQuotesCard policy={item} />}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListFooterComponent={<View style={{ height: 16 }} />}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* <NoDataFoundPage /> */}
        </View>
        {/* <BottomNavigation /> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
