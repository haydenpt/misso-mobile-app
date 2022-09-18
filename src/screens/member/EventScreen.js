// Core
import React from "react";

// Components
import { View, Text, TouchableOpacity } from "react-native";

// Context Providers
import { useAuth } from "../../components/auth/AuthContext";
import { useMessage } from "../../components/auth/MessageContext";

// Styles
import { appStyles } from "../../styles/styles";

const EventScreen = () => {
  const { logOut } = useAuth();
  const { setMessage, showMessage } = useMessage();

  async function handleLogOut() {
    await logOut();
    setMessage("You have been loged out.", "info");
    showMessage(true);
  }
  return (
    <View style={[styles.eventScreenContainer]}>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventScreen;

const styles = { ...appStyles };
