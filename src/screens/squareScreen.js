import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import {Text, Button} from 'react-native-elements';
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () =>
{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 15;
    console.log("color rojo -->",red);
    console.log("color verde -->",green);
    console.log("color azul -->",blue);

    function showToast(){
        ToastAndroid.show("Ha llegado al limite", ToastAndroid.SHORT);
    }
    const setColor = (color, change) =>
    {
        switch (color) {
            case 'red':
                    if (red + change > 255 || red + change < 0){
                        showToast();
                        return ;
                    }else{
                        setRed(red + change);
                    }
                break;
            case 'green':
                if (green + change > 255 || green + change < 0){
                    showToast();
                    return ;
                }else{
                    setGreen(green + change);
                }
                break;
            case 'blue':
                if (blue + change > 255 || blue + change < 0){
                    showToast();
                    return ;
                }else{
                    setBlue(blue + change);
                }
                break;
        }
    }

    return(
        <View>
            <ScrollView>
                <ColorCounter
                    color="Red"
                    onIncrease={ ()=> setColor('red', COLOR_INCREMENT)}
                    onDecrease={ ()=> setColor('red', -1 * COLOR_INCREMENT)} //se hace incrementos de valores negativos
                />
                <ColorCounter
                    color="Green"
                    onIncrease={ ()=> setColor('green', COLOR_INCREMENT)}
                    onDecrease={ ()=> setColor('green', -1*COLOR_INCREMENT)}
                />
                <ColorCounter
                    color="Blue"
                    onIncrease={ ()=> setColor('blue', COLOR_INCREMENT)}
                    onDecrease={ ()=> setColor('blue', -1*COLOR_INCREMENT)}
                />
                <View style={{ height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SquareScreen;