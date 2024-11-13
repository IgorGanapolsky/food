import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          source={{ uri: restaurant.imageUrl }} 
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.rating}>
            {restaurant.rating} Stars, {restaurant.reviews} Reviews
          </Text>
          {/* Add more restaurant details here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});

export default RestaurantDetailsScreen; 