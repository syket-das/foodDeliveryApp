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
} from 'react-native';
import { colors } from '../global/styles';
import HomeHeader from '../components/HomeHeader';
import { Icon } from 'react-native-elements';
import { filterData } from '../global/Data';

export default function HomeScreen() {
  const [delivery, setDelivery] = React.useState(true);
  const [indexCheck, setIndexCheck] = React.useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={true} stickyHeaderIndices={[0]}>
        <View>
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
      </ScrollView>
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
});
