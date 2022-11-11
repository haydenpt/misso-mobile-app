import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { getProfileByEmail } from "../../APIs/member_functions.js";
import { auth } from "./firebase.js"; // auth module contains authentication features
import { appStyles } from "../../styles/styles.js";
import * as navigation from "../../../RootNavigation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
// Create a global authentication state to be used throughtout the children components
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Current logged in user
  const [currentUser, setCurrentUser] = useState({});
  const [waitCurrentUser, setWaitCurrentUser] = useState(true); // wait for current user
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  async function signUp(email, password) {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      // err catched here is an array. Convert to string for easy error handling
      return { error: err.toString() };
    }
  }

  async function logIn(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      err = err.toString();
      if (err.includes("auth/user-not-found")) {
        err =
          "Account does not exist.\nIf you just signed up for membership, please create a MISSO App account.";
      }
      if (err.includes("auth/wrong-password")) {
        err = "Incorrect password. Please try again.";
      }
      if (err.includes("auth/too-many-requests")) {
        err =
          "This account has been restricted due to too many failed login attempts. Please try again later or reset your password for immediate access.";
      }
      return { error: err };
    }
  }

  async function logOut() {
    try {
      return await signOut(auth);
    } catch (err) {
      // err catched here is an array. Convert to string for easy error handling
      return { error: "Logout error"};
    }
  }

  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return {};
    } catch (err) {
      err = err.toString();
      if (err.includes("auth/user-not-found")) {
        err =
          "Failed to reset your password.\nAn account with this email does not exist.";
      }
      return { error: err };
    }
  }

  function updateUser(new_name) {
    try {
      currentUser.updateProfile({
        displayName: new_name,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function isAdmin() {
    return profile.is_admin === 1;
  }

  function isTechGod() {
    return profile.is_admin === 1 && profile.email === "tech@misso.org";
  }

  async function setProfileForFrontEnd(user) {
    const res = await getProfileByEmail(user.email);
    if (res.data) {
      setProfile(res.data[0]);
    }
  }

  // onAUthStateChaned listens to the authentication event (login logout signup)
  // this method return 1 single parameter
  // Set current user after auth state changes
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // Take the user returned by onAuthStateChaned() and pass to set user
      // Find current user first
      setCurrentUser(user);
      // Then stop the wait
      if (user) {
        // If user signed in, skip login page
        setProfileForFrontEnd(user);
        navigation.navigate("Events");
      } else {
        navigation.navigate("Login");
      }
      setWaitCurrentUser(false);
      setLoading(false);
    });
  }, [profile?.length]); // [] makes unsubscribe runs once on first render

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateUser,
    loading,
    setLoading,
    setProfileForFrontEnd,
    profile,
    isAdmin,
    isTechGod,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Only render the children, which is our app, when there is a current user */}
      {loading && (
        <ActivityIndicator color="#ffffff" style={[appStyles.loadingIcon]} />
      )}
      {!waitCurrentUser && children}
    </AuthContext.Provider>
  );
}
