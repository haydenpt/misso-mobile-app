// Core
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Components
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import EventScreen from "../screens/member/EventScreen";
import MemberProfileScreen from "../screens/member/MemberProfileScreen";

// Icon Components
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// Context Providers
import { useAuth } from "../components/auth/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomDrawer from "./CustomDrawer";
import EducationScreen from "../screens/member/EducationScreen";
import GetInvolvedScreen from "../screens/member/GetInvoledScreen";
import DevelopmentScreen from "../screens/member/DevelopmentScreen";
import OpportunitiesScreen from "../screens/member/OpportunitiesScreen";
import MemberBoardScreen from "../screens/member/MemberBoardScreen";
import OfficerBoardScreen from "../screens/member/OfficerBoardScreen";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Navigator() {
  const { currentUser } = useAuth();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {},
        drawerActiveBackgroundColor: "#293343",
        drawerActiveTintColor: "#47E5C1",
        drawerInactiveTintColor: "#ffffff",
        drawerLabelStyle: { fontSize: 14, marginLeft: -15, textAlign: "left" },
        drawerItemStyle: { borderRadius: 12, paddingLeft: 15 },
        headerStyle: {
          backgroundColor: "#2F3C4E",
        },
        headerTintColor: "#fff",
      }}
    >
      {/* Auth Routes exist to navigate but hidden in drawer menu */}
      <Drawer.Group
        screenOptions={{
          headerShown: false,
          drawerItemStyle: {
            display: "none",
          },
        }}
      >
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="ResetPassword" component={ForgotPasswordScreen} />
      </Drawer.Group>

      <Drawer.Group>
        <Drawer.Screen
          name="Events"
          component={EventScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <MaterialIcons name="event-note" size={22} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Education"
          component={EducationScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <FontAwesome name="graduation-cap" size={17} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Get Involved"
          component={GetInvolvedScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <MaterialIcons name="people" size={22} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Development"
          component={DevelopmentScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <FontAwesome name="suitcase" size={22} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Opportunities"
          component={OpportunitiesScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <MaterialIcons name="attachment" size={22} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Member Board"
          component={MemberBoardScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <FontAwesome name="trophy" size={24} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="Officer Board"
          component={OfficerBoardScreen}
          options={({ navigation, route }) => ({
            drawerIcon: ({ color }) => (
              <MaterialIcons name="local-police" size={22} color={color} />
            ),
          })}
        />
        <Drawer.Screen
          name="My Account"
          component={MemberProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="badge" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}
