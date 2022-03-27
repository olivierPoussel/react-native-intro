import React from 'react'
import { View, Text } from 'react-native'

export default function test() {
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
      </View>
    )
  }