import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const SignInWelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 3,
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

      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slidel}>
            <Image
              source={{
                uri: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://images.news18.com/ibnlive/uploads/2021/12/tasty-food-16395388373x2.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="Sign In"
            type="outline"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slidel: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.grey3,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
