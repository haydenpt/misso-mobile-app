import {
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import React from "react";
import { stylesAuth, appStyles } from "../../styles/styles";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import AuthScreenFooter from "./AuthScreenFooter";

const ForgotPasswordScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.authScreenContainer}>
        <Image
          style={styles.logoInAuth}
          source={require("../../assets/logo-white.png")}
        />
        <ResetPasswordForm />

        <AuthScreenFooter />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

const styles = { ...appStyles, ...stylesAuth };
