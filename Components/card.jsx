import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function card({name}) {
    const [textAf, setTextAf] = useState('Ici il va y avoir du texte');
    const [count, setCount] = useState(1);

    const press = () => {
        // setTextAf('J\'ai cliqué '+ count +' fois')
        setCount(count + 1)
        setTextAf(`J'ai cliqué ${count} fois`)
    }
    return (
        <View>
            <Text>{textAf}</Text>
            <Button 
                title={'Label button'}
                onPress={press}
            />
        </View>
    )
}
