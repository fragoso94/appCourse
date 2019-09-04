import React, {useReducer} from 'react';
import {View, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import {Text, Button} from 'react-native-elements';
import ColorCounter from "../Components/ColorCounter";

//función reductora
const reducer = (state, action) =>
{
    switch (action.type) {
        case 'change_red':
             return (state.red + action.payload > 255 || state.red + action.payload < 0)
                ? state : { ...state, red: state.red + action.payload};
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0)
                ? state : { ...state, green: state.green + action.payload};
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0){
                showToast();
                return state;
            }
            return { ...state, blue: state.blue + action.payload};
        default: return state;
    }
}
function showToast(){
    ToastAndroid.show("Ha llegado al limite", ToastAndroid.SHORT);
}

const SquareScreen = () =>
{
    const COLOR_INCREMENT = 15;
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue} = state;
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    console.log("color rojo -->",red);
    console.log("color verde -->",green);
    console.log("color azul -->",blue);

    /*const setColor = (color, change) =>
    {
        switch (color) {
            case 'red':
                (red + change > 255 || red + change < 0) ? showToast() : setRed(red + change)
                return;
            case 'green':
                (green + change > 255 || green + change < 0) ? showToast() : setGreen(green + change)
                return;
            case 'blue':
                (blue + change > 255 || blue + change < 0) ? showToast() : setGreen(blue + change)
                return;
        }
    }*/

    return(
        <View>
            <ScrollView>
                <ColorCounter
                    color="Red"
                    onIncrease={ () => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                    onDecrease={ () => dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})}
                    //onIncrease={ ()=> setColor('red', COLOR_INCREMENT)}
                    //onDecrease={ ()=> setColor('red', -1 * COLOR_INCREMENT)} //se hace incrementos de valores negativos
                />
                <ColorCounter
                    color="Green"
                    onIncrease={ () => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                    onDecrease={ () => dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})}
                    // onIncrease={ ()=> setColor('green', COLOR_INCREMENT)}
                    // onDecrease={ ()=> setColor('green', -1*COLOR_INCREMENT)}
                />
                <ColorCounter
                    color="Blue"
                    onIncrease={ () => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                    onDecrease={ () => dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})}
                    // onIncrease={ ()=> setColor('blue', COLOR_INCREMENT)}
                    // onDecrease={ ()=> setColor('blue', -1*COLOR_INCREMENT)}
                />
                <View style={{ height:100, width:100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}} />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SquareScreen;