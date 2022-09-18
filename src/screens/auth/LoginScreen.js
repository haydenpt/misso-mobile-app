import { Image, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { stylesAuth, appStyles } from "../../styles/styles";
import AuthScreenFooter from "./AuthScreenFooter";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.authScreenContainer}>
        <Image
          style={styles.logoInAuth}
          source={require("../../assets/logo-white.png")}
        />
        <LoginForm />

        <AuthScreenFooter />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = { ...appStyles, ...stylesAuth };
