import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
