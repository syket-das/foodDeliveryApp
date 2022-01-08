import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../components/Header';
import { colors, title } from '../../global/styles';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const SignInScreen = () => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />
      <View>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Registered with your account</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            ref={textInput1}
            style={styles.textInput1}
            placeholder="Email"
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={500}
          >
            <Icon
              name="lock"
              type="material"
              iconStyle={{ color: colors.grey3 }}
            />
          </Animatable.View>
          <TextInput
            ref={textInput2}
            style={{ width: '80%' }}
            placeholder="Password"
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}
          >
            <Icon
              name="visibility-off"
              type="material"
              iconStyle={{ color: colors.grey3 }}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
});
