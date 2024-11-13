import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantItem = ({ restaurant, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}
    >
      <View style={styles.container}>
        <Image 
          source={{ uri: restaurant.imageUrl }} 
          style={styles.image}
        />
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text>{restaurant.rating} Stars, {restaurant.reviews} Reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default RestaurantItem; 