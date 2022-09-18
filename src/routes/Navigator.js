import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import EventScreen from "../screens/member/EventScreen";

import { useAuth } from "../components/auth/AuthContext";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const { currentUser } = useAuth();
  return (
    <Stack.Navigator>
      {/* Skip login screen if user is signed in */}
      {!currentUser && (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      )}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Events"
        component={EventScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
