import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <Header title="My Account" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
