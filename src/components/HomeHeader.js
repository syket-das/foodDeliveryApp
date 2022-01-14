import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 15 }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={30}
        />
      </View>
      <View>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Food Express
        </Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={30}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
