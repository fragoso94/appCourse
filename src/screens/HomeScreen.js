import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native'
import ButtonComponent from "../Components/ButtonComponent";
const btnRoute = [
    {
    "title": "prueba 1",
    "ruta": "'Box'",
    },
    {
        "title": "prueba 3",
        "ruta": "'Box'",
    }
];

const HomeScreen = ({navigation}) =>
{
    return (
        <View>
            <Button
                color="#008000"
                title="Ir a mi componente"
                onPress={ () => navigation.navigate('Components') }
            />
            <Button
                title="Ir a la lista"
                onPress={ () => navigation.navigate('List') }
            />
            <Button
                title="Go to Image Detail"
                onPress={ ()=> navigation.navigate('CardImage') }
            />
            <Button
                title="Counter screen"
                onPress={ ()=> navigation.navigate('Counter')}
            />
            <Button
                title="Colors screen"
                onPress={ ()=> navigation.navigate('Colors')}
            />
            <Button
                title="Square screen"
                onPress={ ()=> navigation.navigate('Square')}
            />
            <Button
                title="Text screen"
                onPress={ ()=> navigation.navigate('Text')}
            />
            <Button
                title="Box screen"
                onPress={ ()=> navigation.navigate('Box')}
            />
            <Button
                title="Exercise screen"
                onPress={ ()=> navigation.navigate('Exercise')}
            />
            {/*<TouchableOpacity onPress={ ()=> navigation.navigate('CardImage')}>
                <Text>Ir a la lista</Text>
            </TouchableOpacity>*/}
            {/* método para manda varios botones con método como props
                btnRoute.map(
                    (btn, index)=> <ButtonComponent key={index} title={btn.title} route={()=> { (typeof(btn.ruta) === 'string') ? navigation.navigate(btn.ruta): console.log("no existe ruta")}} />
                )
            */}
        </View>

    );

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