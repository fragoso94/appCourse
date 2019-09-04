import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {Text, Input} from 'react-native-elements';

const TextScreen = () =>
{
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");

    const labelDanger = <Text style={style.textColorDanger}>Favor de ingresar 5 o más caracteres</Text>;
    const labelSucess = <Text style={style.textColorSucess}>Contraseña valida.</Text>
    return(
        <View>
            <Text>Ingrese su contraseña:</Text>
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                value={name2}
                onChangeText ={
                    (nombre2) => setName2(nombre2)
                }
            />
            <TextInput
                style={style.inputStyle}
                autoCapitlize="none"
                autoCorrect={false}
                value={name}
                onChangeText={
                    (nombre) => setName(nombre)
                }
            />
            <Text>Input 1: {name2}</Text>
            { (name2.length < 5)
                ? <Text style={style.textColorDanger}>Favor de ingresar 5 o más caracteres</Text>
                : <Text style={style.textColorSucess}>Contraseña valida.</Text>
            }
            <Text>Input 2: {name}</Text>
            {
                (name.length < 5)
                    ? labelDanger
                    : labelSucess
            }

        </View>

    );
}

const style = StyleSheet.create({
    inputStyle:{
        margin: 10,
        borderColor: 'black',
        borderWidth: 0.5
    },
    textColorDanger:{
        color: 'red'
    },
    textColorSucess:{
        color: 'green'
    }
})
export default TextScreen;