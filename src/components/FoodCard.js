import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

const FoodCard = ({
  onPressFoodCart,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: images }}
        />

        <View style={{ padding: 3 }}>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                size={18}
                color={colors.grey3}
              />
              <Text style={styles.Min}>{farAway} Min</Text>
            </View>
            <View style={{ flex: 9, flexDirection: 'row' }}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={{ color: 'white' }}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    borderRightWidth: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
  Min: {
    fontSize: 12,
    color: colors.grey3,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: `rgba(52, 52, 52, 0.3)`,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 10,
  },
  average: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
