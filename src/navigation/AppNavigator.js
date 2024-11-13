import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  console.log('RestaurantsScreen type:', typeof RestaurantsScreen);
  console.log('RestaurantDetailsScreen type:', typeof RestaurantDetailsScreen);

  if (typeof RestaurantsScreen !== 'function') {
    console.error('RestaurantsScreen is not a valid component');
    return null;
  }

  if (typeof RestaurantDetailsScreen !== 'function') {
    console.error('RestaurantDetailsScreen is not a valid component');
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Restaurants" 
          component={RestaurantsScreen}
          options={{ title: 'Restaurants' }}
        />
        <Stack.Screen 
          name="RestaurantDetails" 
          component={RestaurantDetailsScreen}
          options={({ route }) => ({ title: route.params?.restaurant?.name || 'Details' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; 