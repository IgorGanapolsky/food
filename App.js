import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRegistry } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerTitleStyle: {
            color: '#fff',
          },
          title: 'Business Search',
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('main', () => App);

export default App;
