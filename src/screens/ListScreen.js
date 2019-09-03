import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import createDOMProps from "react-native-web/dist/modules/createDOMProps";

const ListScreen = () => {
    const friends = [
        {
            name: 'friend #1',
            age: '20'
        },
        { name: 'friend #2', age: '30'},
        { name: 'friend #3', age: '28'},
        { name: 'friend #4', age: '28'},
        { name: 'friend #5', age: '40'},
        { name: 'friend #6', age: '10'},
        { name: 'friend #7', age: '15'},
        { name: 'friend #8', age: '50'}
    ];
    return (
        <FlatList
            //horizontal={true} //propiedad para despplazar la lista horizontalmente (por default lo imprime veticalmente)
            //showsHorizontalScrollIndicator={false}
            keyExtractor={ (friend) => friend.name} //key para referencia los objectos con los registros en pantalla
            data={friends}
            renderItem={ ({item}) => {
                    return <Text style={style.textStyle}>{item.name} - {item.age} </Text>;
                }
            }
        />
    );
};

const style = StyleSheet.create({
    textStyle:{
        marginVertical: 10
    }
});

export default ListScreen;