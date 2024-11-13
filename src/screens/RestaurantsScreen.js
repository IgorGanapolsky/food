import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RestaurantItem from '../components/RestaurantItem';
import yelp from '../api/yelp';

function RestaurantsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setSearchResults(response.data.businesses);
      setHasSearched(true);
    } catch (err) {
      console.error('Something went wrong:', err);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.length > 2) {
      searchApi(text);
    } else if (text.length === 0) {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  const renderItem = ({ item }) => (
    <RestaurantItem 
      restaurant={{
        ...item,
        reviews: item.review_count,
        imageUrl: item.image_url,
      }} 
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor="#666"
            autoCapitalize="none"
          />
        </View>
      </View>
      
      {hasSearched && (
        <Text style={styles.resultsText}>
          We have found {searchResults.length} results
        </Text>
      )}

      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  resultsText: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  listContainer: {
    padding: 5,
  },
});

export default RestaurantsScreen; 