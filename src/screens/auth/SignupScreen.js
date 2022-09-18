// Core
import React from "react";

// Components
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SignupForm from "../../components/auth/SignupForm";

// Style
import { stylesAuth, appStyles } from "../../styles/styles";
import AuthScreenFooter from "./AuthScreenFooter";

const SignupScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.authScreenContainer}>
        <Image
          style={styles.logoInAuth}
          source={require("../../assets/logo-white.png")}
        />
        <SignupForm />
        <AuthScreenFooter />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;

const styles = { ...appStyles, ...stylesAuth };
