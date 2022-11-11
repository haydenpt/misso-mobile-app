// Core
import React from "react";
import * as Linking from "expo-linking";

// Components
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// Contet Providers
import { useAuth } from "../components/auth/AuthContext";
import { useMessage } from "../components/auth/MessageContext";

// Styles
import { appStyles, stylesDrawer } from "../styles/styles";

const CustomDrawer = (props) => {
  const { profile, logOut } = useAuth();
  const { setMessage, showMessage } = useMessage();

  async function handleLogOut() {
    await logOut();
    setMessage("You have been loged out.", "info");
    showMessage(true);
  }

  function navigateUserGuide() {
    const url = "https://misso.org/misso-member-app-guide";
    Linking.openURL(url);
  }
  function navigateTechSupport() {
    const url = "https://misso.org/contact-tech-support";
    Linking.openURL(url);
  }
  function navigateWebsite() {
    const url = "https://misso.org";
    Linking.openURL(url);
  }

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerHeader}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={navigateWebsite}>
          <Image
            style={styles.drawerLogo}
            source={require("../assets/logo-white.png")}
          />
        </TouchableOpacity>
        <View style={styles.helloContainer}>
          <Text style={styles.geetingMessage}>
            Hello, {profile.first_name}!
          </Text>
        </View>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerToolContainer}>
        <TouchableOpacity
          style={styles.drawerToolButton}
          onPress={navigateUserGuide}
        >
          <Text style={styles.drawerToolText}>User Manual</Text>
          <MaterialIcons name="info" size={20} color="#94A0B8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerToolButton}
          onPress={navigateTechSupport}
        >
          <Text style={styles.drawerToolText}>Tech Support</Text>
          <FontAwesome name="question-circle" size={20} color="#94A0B8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerToolButton}
          onPress={handleLogOut}
        >
          <Text style={styles.drawerToolText}>Sign Out</Text>
          <MaterialIcons name="logout" size={20} color="#94A0B8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = { ...stylesDrawer, ...appStyles };
