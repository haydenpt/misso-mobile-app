// Core
import React from "react";

// Components
import { View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Context Providers
import { useAuth } from "../../components/auth/AuthContext";
import { useMessage } from "../../components/auth/MessageContext";

// Styles
import { appStyles } from "../../styles/styles";
import EventList from "../../components/events/EventList";
import { ScrollView } from "react-native-gesture-handler";

const EventScreen = ({ navigation }) => {
  const { logOut } = useAuth();
  const { setMessage, showMessage } = useMessage();


  return (
    <View style={[styles.eventScreenContainer]}>
      <ScrollView>
        <EventList />
      </ScrollView>
    </View>
  );
};

export default EventScreen;

const styles = { ...appStyles };
