import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PizzaCard from './PizzaCard'
import Pizzas from '../assets/pizzas.json'

export default function home({navigation}) {
    return (
        <View>
        <FlatList 
          data={Pizzas} 
          keyExtractor={item => item.nom }
          renderItem={({item}) => <PizzaCard pizza={item} navigation={navigation} />} 
        />
      </View>
    )
}

const styles = StyleSheet.create({})
