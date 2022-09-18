//Core
import React from "react";
import * as Linking from "expo-linking";

// Components
import { Text, View, TouchableOpacity } from "react-native";

// Style
import { appStyles, stylesAuth } from "../../styles/styles";

const AuthScreenFooter = () => {
  function navigateWebsite() {
    const url = "https://misso.org";
    Linking.openURL(url);
  }
  function navigateUserGuide() {
    const url = "https://misso.org/misso-member-app-guide";
    Linking.openURL(url);
  }
  function navigateTechSupport() {
    const url = "https://misso.org/contact-tech-support";
    Linking.openURL(url);
  }
  return (
    <View style={[styles.authFooterContainer]}>
      <TouchableOpacity activeOpacity={0.5} onPress={navigateWebsite}>
        <Text style={[styles.textWhite]}>MISSO Website</Text>
      </TouchableOpacity>

      <Text style={[styles.textWhite]}>|</Text>

      <TouchableOpacity activeOpacity={0.5} onPress={navigateUserGuide}>
        <Text style={[styles.textWhite]}>User Guide</Text>
      </TouchableOpacity>

      <Text style={[styles.textWhite]}>|</Text>

      <TouchableOpacity activeOpacity={0.5} onPress={navigateTechSupport}>
        <Text style={[styles.textWhite]}>Tech Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreenFooter;

const styles = { ...appStyles, ...stylesAuth };
