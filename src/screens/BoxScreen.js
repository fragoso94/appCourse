import React, {Fragment} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const BoxScreen = () =>
{
    return(
        <>
            <ScrollView>
                <Text>FLEX BOX</Text>
                <View style={style.viewStyle1}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle2}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle3}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle5}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <Text>FLEX DIRECTION</Text>
                <View style={style.viewStyle6}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle7}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle8}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle9}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <Text>Justify Content</Text>
                <View style={style.viewStyle10}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle11}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle12}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <View style={style.viewStyle13}>
                    <Text style={style.textStyle}>Box 1</Text>
                    <Text style={style.textStyle}>Box 2</Text>
                    <Text style={style.textStyle}>Box 3</Text>
                </View>
                <Text>FLEX VALUES CHILD</Text>
                <View style={style.viewStyle}>
                    <Text style={style.textOneStyle}>Box 1</Text>
                    <Text style={style.textTwoStyle}>Box 2</Text>
                    <Text style={style.textThreeStyle}>Box 3</Text>
                    <Text style={style.textForStyle}>Box 4</Text>
                </View>
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    viewStyle:{
        borderWidth: 2,
        borderColor: 'black',
        height: 150,
        // flexDirection: 'row'
    },
    textStyle:{
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        margin: 1,
        padding: 3,
        backgroundColor: 'black',
        textAlign: 'center'
    },
    textOneStyle:{
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        margin: 1,
        padding: 3,
        textAlign: 'center',
        flex: 4 //proporción de espacio es el 40%
    },
    textTwoStyle:{
        borderWidth: 1,
        borderColor: 'green',
        color: 'red',
        margin: 1,
        padding: 3,
        textAlign: 'center',
        flex: 3,
        alignSelf: 'flex-end',
        bottom: 10 //sube un espacio de 10
    },
    textThreeStyle:{
        borderWidth: 1,
        borderColor: 'blue',
        color: 'red',
        margin: 1,
        padding: 3,
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    textForStyle:{
        borderWidth: 1,
        borderColor: 'gray',
        color: 'red',
        margin: 1,
        padding: 3,
        textAlign: 'center',
        position: 'absolute',
        left: 20,
        top: 10

    },
    viewStyle1:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        alignItems: 'flex-start'
    },
    viewStyle2:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        alignItems: 'center'
    },
    viewStyle3:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        alignItems: 'flex-end'
    },
    viewStyle4:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        alignItems: 'flex-start'
    },
    viewStyle5:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        alignItems: 'stretch'
    },
    viewStyle6:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        flexDirection: 'row',
        height: 50
    },
    viewStyle7:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 100
    },
    viewStyle8:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    },
    viewStyle9:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 100
    },
    viewStyle10:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    viewStyle11:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'gray'
    },
    viewStyle12:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'gray'
    },
    viewStyle13:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        height: 150,
        // por default flexDirection = 'column' = horizontal
        justifyContent: 'space-between',
        backgroundColor: 'gray'
    }

});

export default BoxScreen;

