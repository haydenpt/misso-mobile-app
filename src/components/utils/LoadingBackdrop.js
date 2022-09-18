import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appStyles from '../../styles/styles'

const LoadingBackdrop = () => {
  return (
    <View style={[styles.loadingBackdrop]}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingBackdrop;

const styles = {appStyles};
