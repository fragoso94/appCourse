import React, {Fragment} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../Components/ImageDetail";

const Cursos = [
    {
        'titulo' : 'React desde cero',
        'img' : 'image1.png'
    },
    {
        'titulo' : 'Firebase con android',
        'img' : 'image2.png'
    },
    {
        'titulo' : 'CEO Avanzado',
        'img' : 'image3.png'
    },
    {
        'titulo' : "Conmutación de redes",
        'img' : 'image4.png'
    },
];

const ImageScreen = () => {
    return(
        <View>
            {
              Cursos.map( (c, index) => <ImageDetail key={index} titulo={c.titulo} img={c.img} /> )
            }
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ImageScreen;
