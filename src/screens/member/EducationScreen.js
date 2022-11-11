import { View, Text } from "react-native";
import React from "react";
import { appStyles } from "../../styles/styles";

const EducationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>EducationScreen</Text>
    </View>
  );
};

export default EducationScreen;

const styles = { ...appStyles };
