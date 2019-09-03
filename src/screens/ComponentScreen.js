import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const ComponentScreen = () =>
{
    const greeting = 'Hi World!';
    const nombre = <Text style={style.textName}>José Daniel Fragoso Gómez</Text>
    return (
        <View style={style.container}>
            <Text style={style.textStyle}>
                Este es un componente
            </Text>
            <Text>{greeting}</Text>
            {nombre}
        </View>

    )

}

const style = StyleSheet.create({
    textStyle:{
        color: '#002550',
        paddingTop: 10,
        fontSize: 20
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textName:{
        color: 'red',
        fontSize: 10
    }
});

export default ComponentScreen;