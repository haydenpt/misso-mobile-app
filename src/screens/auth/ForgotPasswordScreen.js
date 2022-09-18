import {
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    View,
  } from "react-native";
  import * as Linking from "expo-linking";
  import React from "react";
  import LoginForm from "../../components/auth/LoginForm";
  import { stylesAuth, appStyles } from "../../styles/styles";
  
  const ForgotPasswordScreen = () => {
    function navigateWebsite() {
      const url = "https://misso.org";
      Linking.openURL(url);
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.authScreenContainer}>
          <Image
            style={styles.logoInAuth}
            source={require("../../assets/logo-white.png")}
          />
          <LoginForm />
  
          <View style={[styles.techSupportContainer]}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={[styles.textWhite]}>MISSO Website</Text>
            </TouchableOpacity>
  
            <Text style={[styles.textWhite]}>|</Text>
  
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={[styles.textWhite]}>User Guide</Text>
            </TouchableOpacity>
  
            <Text style={[styles.textWhite]}>|</Text>
  
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={[styles.textWhite]}>Tech Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default ForgotPasswordScreen;
  
  const styles = { ...appStyles, ...stylesAuth };
  