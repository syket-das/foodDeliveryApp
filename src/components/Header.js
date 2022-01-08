import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.headerText}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    alignItems: 'center',
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
