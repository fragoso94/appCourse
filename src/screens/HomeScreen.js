import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const HomeScreen = () =>
{
    return (
        <View style={style.container}>
            <Text style={style.textStyle}>
                Este es la vista de Home
            </Text>
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
    }
});

export default HomeScreen;