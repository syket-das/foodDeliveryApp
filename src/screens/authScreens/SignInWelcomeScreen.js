import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const SignInWelcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',

          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}
        >
          DISCOVER NEW RESTURANTS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}
        >
          IN YOUR AREA
        </Text>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({});
