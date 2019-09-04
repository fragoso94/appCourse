import React, {useState} from 'react';
import { View, StyleSheet }from 'react-native';
import {Text, Button} from 'react-native-elements';
import {set} from "react-native-reanimated";

const CounterScreen = () =>
{
    const [counter, setCounter] = useState(0);
    //console.log("final", counter)
    return(
        <View style={style.viewContainer}>
            <Button
                buttonStyle={style.btnStyle}
                title="Incrementar"
                onPress={ ()=> {
                    //console.log("inicio", counter)
                    setCounter(counter + 1)
                    }
                }
            />
            <Button
                buttonStyle={style.btnStyle}
                title="Decrementar"
                onPress={ ()=> {
                    setCounter(counter - 1)
                    }
                }
            />
            <Text>
                Current count: {counter}
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