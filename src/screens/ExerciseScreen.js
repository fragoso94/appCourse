import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExerciseScreen = () =>
{
    return (
        <View style={style.viewStyle}>
            <View style={style.textStyleOne}/>
            <View style={style.textStyleTwo}/>
            <View style={style.textStyleThree}/>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle:{
        borderWidth: 2,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyleOne:{
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    textStyleTwo:{
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    textStyleThree:{
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        color: 'blue'
    }
});

export default ExerciseScreen;