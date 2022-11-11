import { View, Text } from "react-native";
import React from "react";
import { appStyles } from "../../styles/styles";

const MemberBoardScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>MemberBoardScreen</Text>
    </View>
  );
};

export default MemberBoardScreen;

const styles = { ...appStyles };
