import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const SpinnerComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="superalarge" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpinnerComponent;