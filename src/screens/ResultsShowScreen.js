import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsShowScreen = ({ route }) => {
    const result = route.params?.result;
    if (!result) {
        return null;
    }

    console.log('result: --------->', result);

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 200,
        marginBottom: 10,
    },
});

export default ResultsShowScreen;