import { View, Text } from "react-native";
import React from "react";
import { appStyles } from "../../styles/styles";

const OfficerBoardScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>OfficerBoardScreen</Text>
    </View>
  );
};

export default OfficerBoardScreen;

const styles = { ...appStyles };
