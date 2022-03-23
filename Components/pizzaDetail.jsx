import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function PizzaDetail({ navigation, route }) {
    const pizza = route.params.pizza;
    const handlePress = (event) => {
        //permet de revenir sur la précédente vue de la stack navigation
        navigation.pop();
    }

    return (
        <View style={styles.main}>
            <Image source={{ uri: pizza.imageUrl }} style={styles.img}></Image>
            <Text style={styles.txt}>{pizza.nom}</Text>
            <Text style={styles.txt}>Prix : {pizza.prix}€</Text>
            <Text style={styles.txt}>Ingredients : </Text>
            <View style={[styles.main, styles.pan]}>
                {pizza.ingredients.map((ingredient, index) => {
                    return <Text key={index} style={styles.txt_md}>{ingredient}</Text>
                })}
            </View>
            <Button onPress={handlePress} title="Retour" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, flexDirection: 'column', alignItems: 'center' },
    txt: { fontSize: 30, marginTop: 20 },
    txt_md: { fontSize: 20, marginTop: 5 },
    img: { width: 150, height: 150, marginTop: 20 },
    pan: { borderWidth: 1, borderRadius: 30, borderColor: 'gray', padding: 10, marginTop: 5, marginBottom: 5, flex: 0 },
})
