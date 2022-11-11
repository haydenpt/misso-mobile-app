// Core
import React from "react";
import * as navigation from "../../../RootNavigation";

// Components
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Context
import { useProfile } from "./ProfileContext";
import { useAuth } from "./AuthContext";
import { useMessage } from "./MessageContext";

// Styles
import { appStyles, stylesAuth } from "../../styles/styles";
import { validateEmail } from "../utils/validation";
import { async } from "@firebase/util";

const ResetPasswordForm = () => {
  const { email, setEmail } = useProfile();
  const { resetPassword, setLoading } = useAuth();
  const { setMessage, showMessage } = useMessage();

  async function validateAndReset() {
    const validEmail = validateEmail(email);
    if (validEmail) {
      await handleReset();
    } else {
      setMessage("Please enter a valid email address. ", "error");
    }
    showMessage(true);
  }

  async function handleReset() {
    setLoading(true);
    const _resetPassword = await resetPassword(email);
    if (!_resetPassword.error) {
      setMessage(
        "Email sent!\nPlease check your Inbox/Spam folder for password reset instruction.",
        "success"
      );
      navigateLogin();
    } else {
      setMessage(_resetPassword.error, "error");
    }
    setLoading(false);
  }

  function navigateLogin() {
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView>
      <View style={[styles.authFormContainer, styles.boxShadow1]}>
        <Text style={styles.authFormHeader}>Reset Your Password</Text>
        <TextInput
          placeholder="Personal Email"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="username"
          onChangeText={(text) => setEmail(text)}
          style={styles.authInput}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={validateAndReset}
          style={[styles.buttonFullWidth, styles.buttonDark]}
        >
          <Text style={styles.textWhite}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={navigateLogin}
          style={[styles.buttonFullWidth, styles.buttonLight]}
        >
          <Text style={styles.textDark}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordForm;

const styles = { ...appStyles, ...stylesAuth };
