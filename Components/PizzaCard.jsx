import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PizzaCard({pizza, navigation}) {
    const onPress = () => {
        //permet ajouter une vue dans la stack navigation et de l'afficher
        // utiliser navigation.push pour des view sans paramètre 
        // ou navigation.navigate si vous avez besoin d'envoyer des paramètres a la vue
        navigation.navigate('PizzaDetail', {pizza: pizza})
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' ,padding: 10}}>
                <Image source={{uri: pizza.imageUrl}} style={{width: 50, height:50}}/>
                <Text style={{marginLeft: 20}}>{pizza.nom} {pizza.prix}€</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    to: {
        backgroundColor: 'lightgray',
        marginBottom: 5
    }
})
