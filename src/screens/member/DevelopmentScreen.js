import { View, Text } from "react-native";
import React from "react";
import { appStyles } from "../../styles/styles";

const DevelopmentScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>DevelopmentScreen</Text>
    </View>
  );
};

export default DevelopmentScreen;

const styles = { ...appStyles };
