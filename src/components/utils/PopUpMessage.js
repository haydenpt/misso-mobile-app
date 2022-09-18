import { Animated, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { appStyles } from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";

const PopUpMessage = ({
  statusMessage,
  messageType,
  showMessage,
  setMessage,
  displayMessage,
}) => {
  const opacity = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  function fadeIn() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  function fadeOut() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setMessage("");
      showMessage(false);
    }, 150);
  }

  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      if (displayMessage) fadeOut();
    }, 8000);
  }, []);

  return (
    <Animated.View
      style={[
        styles.popUpMessageBox,
        styles.popUpMessageBox[messageType],
        { opacity: opacity },
      ]}
    >
      <Ionicons
        name="close"
        size={18}
        color="black"
        onPress={fadeOut}
        style={[styles.popUpMessageCloseButton]}
      />
      <Text>{statusMessage}</Text>
    </Animated.View>
  );
};

export default PopUpMessage;

const styles = { ...appStyles };
