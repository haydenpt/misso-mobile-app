// Core
import * as Linking from "expo-linking";
import React, { useState } from "react";

// Components
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";

// Styles
import { appStyles, stylesAuth } from "../../styles/styles";

// useContext
import * as navigation from "../../../RootNavigation";
import { useAuth } from "./AuthContext";
import { useMessage } from "./MessageContext";
import { useProfile } from "./ProfileContext";

// Utils
import { validateEmail, validatePassword } from "../utils/validation";

const LoginForm = () => {

  function navigateSignup() {
    navigation.navigate("Signup");
  }
  function navigateRegister() {
    const url = "https://misso.org/signup";
    Linking.openURL(url);
  }

  // const [email, setEmail] = useState(credential.email);
  // const [password, setPassword] = useState(credential.password);
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { logIn, setLoading } = useAuth();
  const { showMessage, setMessage } = useMessage();
  const { email, setEmail, password, setPassword } = useProfile();

  function validateAndLogin() {
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    if (validEmail && validPassword) {
      handleLogIn();
    } else {
      if (!validEmail && !validPassword) {
        setMessage(
          "Please enter a valid email address.\nPassword must have at least 6 character. ",
          "error"
        );
      } else if (!validEmail) {
        setMessage("Please enter a valid email address. ", "error");
      } else if (!validPassword) {
        setMessage("Password must have at least 6 characters. ", "error");
      }
      showMessage(true);
    }
  }

  async function handleLogIn() {
    setLoading(true);
    const _logIn = await logIn(email, password);
    if (!_logIn.error) {
      // Imediately hide all popup after login for better UI
      showMessage(false);
      navigation.navigate("Events");
    } else {
      // Error on firebase's end
      setMessage(_logIn.error, "error");
      showMessage(true);
    }
    setLoading(false);
  }

  function toggleRememberMe() {
    setRememberMe(!rememberMe);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <KeyboardAvoidingView>
      <View style={[styles.authFormContainer, styles.boxShadow1]}>
        <Text style={styles.authFormHeader}>Log In to Member App</Text>
        <TextInput
          placeholder="Personal Email"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="username"
          onChangeText={(text) => setEmail(text)}
          style={styles.authInput}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry={!showPassword ? true : false}
            autoCapitalize="none"
            textContentType="password"
            onChangeText={(text) => setPassword(text)}
            style={styles.authInput}
          />
          <Ionicons
            name={!showPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
            style={{ position: "absolute", right: 20 }}
            onPress={toggleShowPassword}
          />
        </View>

        <View style={[styles.loginTools]}>
          <View style={[styles.rememberMe]}>
            <TouchableOpacity onPress={toggleRememberMe}>
              <CheckBox value={rememberMe} onValueChange={toggleRememberMe} />
            </TouchableOpacity>
            <Text style={[styles.textDark]}> Remember me</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={[styles.textDark, styles.bodyText]}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.buttonFullWidth, styles.buttonDark]}
          onPress={validateAndLogin}
        >
          <Text style={styles.textWhite}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.buttonFullWidth, styles.buttonLight]}
          onPress={navigateSignup}
        >
          <Text style={styles.textDark}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.buttonFullWidth]}
          onPress={navigateRegister}
        >
          <Text style={styles.textDark}>Not yet a member? Register here!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = { ...stylesAuth, ...appStyles };
