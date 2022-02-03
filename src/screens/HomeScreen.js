import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { colors } from '../global/styles';
import HomeHeader from '../components/HomeHeader';
import { Icon } from 'react-native-elements';
import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';

import CountDown from 'react-native-countdown-component';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const [delivery, setDelivery] = React.useState(true);
  const [indexCheck, setIndexCheck] = React.useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={true} stickyHeaderIndices={[0]}>
        <View
          style={{ backgroundColor: colors.cardbackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantsMapScreen');
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* ------------------------------ */}
        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={25}
              />
              <Text style={{ marginLeft: 5 }}>32,kishoreganj</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={25}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={25}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={false}
            horizontal
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}
                >
                  <View
                    style={
                      indexCheck === item.id
                        ? { ...styles.smallCardSelected }
                        : { ...styles.smallCard }
                    }
                  >
                    <Image
                      source={item.image}
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                      }}
                    />
                    <View>
                      <Text
                        style={
                          indexCheck === item.id
                            ? { ...styles.smallCardTextSelected }
                            : { ...styles.smallCardText }
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>

        <View>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 15,
                marginTop: 10,
                marginRight: 5,
              }}
            >
              Expeiring in{' '}
            </Text>
            <CountDown
              until={3600}
              size={15}
              digitStyle={{ backgroundColor: colors.lightgreen }}
              digitTxtStyle={{ color: colors.cardbackground }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'Min', s: 'Sec' }}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginHorizontal: 12 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        {/*  */}
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginHorizontal: 12 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        {/*  */}
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantsData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20, marginLeft: 5 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantsMapScreen');
            }}
          >
            <Icon
              type="material-community"
              name="map-marker-radius"
              color={colors.buttons}
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 2,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardText: {
    color: colors.grey2,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.cardbackground,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    elevation: 4,
  },
});
