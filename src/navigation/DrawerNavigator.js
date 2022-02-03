import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              type="material"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
