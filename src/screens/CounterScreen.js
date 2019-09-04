import React, {useState, useReducer} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Button} from 'react-native-elements';

const reducer = (state, action)=>
{
    //state: {count: number}
    //action {type: 'increment' || 'decrement'}
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload};
        case 'decrement':
            return { ...state, count: state.count + action.payload};
        default: return state;
    }
}

const CounterScreen = () =>
{
    //const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count:0});
    console.log("final", state)
    return(
        <View style={style.viewContainer}>
            <Button
                buttonStyle={style.btnStyle}
                title="Incrementar"
                onPress={ ()=> {
                    //console.log("inicio", counter)
                    //setCounter(counter + 1)
                    dispatch({type:'increment', payload: 1})
                    }
                }
            />
            <Button
                buttonStyle={style.btnStyle}
                title="Decrementar"
                onPress={ ()=> {
                    //setCounter(counter - 1)
                    dispatch({type:'decrement', payload: -1})
                    }
                }
            />
            <Text>
                Current count:{ state.count
                //counter
                }
            </Text>

        </View>
    );
}

const style = StyleSheet.create({
    btnStyle:{
        margin: 10,
        width: 250,
        height: 50
    },
    viewContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CounterScreen;