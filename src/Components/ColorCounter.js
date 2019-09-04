import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';

const ColorCounter = ({color,  onIncrease, onDecrease}) =>
{
    return(
        <View>
            <View style={style.container}>
                <Text style={style.textStyle}>{color}</Text>
                <Button
                    title= {`Incrementar ${color}`}
                    onPress={ ()=> onIncrease() }
                />
                <Button
                    title={`Decrementar ${color}`}
                    onPress={ ()=> onDecrease() }
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        margin: 10
    },
    textStyle:{
        textAlign: 'center'
    }
});

export default ColorCounter;