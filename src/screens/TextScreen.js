import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {Text, Input} from 'react-native-elements';
import {STYLE_ELEMENT_ID} from "react-native-web/dist/exports/StyleSheet/constants";

const TextScreen = () =>
{
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    return(
        <View>
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                value={name2}
                onChangeText ={
                    (nombre2) => setName2(nombre2)
                }
            />
            <TextInput
                style={style.iconStyle}
                autoCapitlize="none"
                autoCorrect={false}
                value={name}
                onChangeText={
                    (nombre) => setName(nombre)
                }
            />
            <Text>Input 1: {name2}</Text>
            <Text>Input 2: {name}</Text>
        </View>

    );
}
const style = StyleSheet.create({
    iconStyle:{
        margin: 10,
        borderColor: 'black',
        borderWidth: 0.5
    }
})
export default TextScreen;