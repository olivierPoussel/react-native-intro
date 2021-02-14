import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function searchBar() {
    const [inputValue, setInputValue] = useState('');

    const press = () => {
        //appel APi
        console.log(inputValue);
    }
    return (
        <View>
            <Text>{inputValue}</Text>
            <TextInput 
                placeholder="Recherche"
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                style={{borderWidth: 1, borderColor: 'red', height: 40}}
            />
            <Button title="Rechercher" onPress={press} />
        </View>
    )
}

const styles = StyleSheet.create({})
