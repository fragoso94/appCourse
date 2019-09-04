import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native'

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
            {/*<TouchableOpacity onPress={ ()=> navigation.navigate('CardImage')}>
                <Text>Ir a la lista</Text>
            </TouchableOpacity>*/}
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