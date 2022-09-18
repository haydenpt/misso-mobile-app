// Core
import React, { useState } from "react";
import * as Linking from "expo-linking";

// Components
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// APIs
import { getEmailWordpress } from "../../APIs/WP_functions";
import { insertMemberToDatabase } from "../../APIs/member_functions";

// Styles
import { appStyles, stylesAuth } from "../../styles/styles";

// Context Providers
import * as navigation from "../../../RootNavigation";
import { useAuth } from "./AuthContext";
import { useMessage } from "./MessageContext";
import { useProfile } from "./ProfileContext";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../utils/validation";

const SignupForm = () => {

  function navigateLogin() {
    navigation.navigate("Login");
  }
  function navigateRegister() {
    const url = "https://misso.org/signup";
    Linking.openURL(url);
  }

  // useState
  // const [email, setEmail] = useState(credential?.email);
  // const [password, setPassword] = useState(credential?.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // useContext
  const { signUp, setLoading } = useAuth();
  const { setMessage, showMessage } = useMessage();
  const {
    setProfileForBackEnd,
    memberProfile,
    email,
    setEmail,
    password,
    setPassword,
  } = useProfile();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function validateAndSignUp() {
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    const validConfirmPassword = validateConfirmPassword(
      password,
      confirmPassword
    );
    if (validEmail && validPassword) {
      if (validConfirmPassword) {
        await handleSignUp();
        // console.log("valid");
      } else {
        setMessage("Passwords must match.", "error");
      }
    }
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

  async function handleSignUp() {
    setLoading(true);

    // Find user in WP database
    try {
      const wp_res = await getEmailWordpress(email);
      if (wp_res.length > 0) {
        await setProfileForBackEnd(email);
        const insertSuccessful = await insertMemberToDatabase(memberProfile);
        if (insertSuccessful.data) {
          // If successfully added to MySQL db then proceed to add to Firebase db
          const _signUp = await signUp(email, password);
          if (!_signUp.error) {
            navigation.navigate("Login");
            setMessage("Account created successfully!", "success");
          } else {
            // Error on Firebase's end
            let err = _signUp.error;
            setMessage(err, "error");
          }
        } else {
          // Error on MySql's end. Could be duplicated PSID or email.
          // If duplicated entry, go to MySQL and fix there.
          setMessage(
            "Failed to sign up.\nDid you already create a MISSO App account? If not, please contact tech@misso.org.",
            "error"
          );
        }
      } else {
        // Can't find email in wp, meaning member hasn't registered or paid
        setMessage(
          "Cannot find your membership for this semester.\nIf you already registered for membership, please contact tech@misso.org.",
          "error"
        );
      }
    } catch (err) {
      // Error with getEmailWordpress() call. Test with Postman
      setMessage(
        "Cannot validate your membership, please contact tech@misso.org. (Code 1147)",
        "error"
      );
    }
    showMessage(true);
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView>
      <View style={[styles.authFormContainer, styles.boxShadow1]}>
        {/* <Image
          style={styles.logo}
          source={require('../../assets/logo-blue.png')}
        /> */}
        <Text style={styles.authFormHeader}>Create an Account</Text>
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
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showPassword ? true : false}
          autoCapitalize="none"
          textContentType="password"
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.authInput}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.buttonFullWidth, styles.buttonDark]}
          onPress={validateAndSignUp}
        >
          <Text style={styles.textWhite}>Create an Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.buttonFullWidth, styles.buttonLight]}
          onPress={navigateLogin}
        >
          <Text style={styles.textDark}>Back to Login</Text>
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

export default SignupForm;

const styles = { ...stylesAuth, ...appStyles };
