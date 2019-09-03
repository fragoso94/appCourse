import React, {Fragment} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../Components/ImageDetail";

const Cursos = [
    {
        'titulo' : 'React desde cero',
        'img' : 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    },
    {
        'titulo' : 'Firebase con android',
        'img' : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png",
    },
    {
        'titulo' : 'CEO Avanzado',
        'img' : 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/SEO%20Avanzado.png',
    },
    {
        'titulo' : "Conmutación de redes",
        'img' : 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Conmutacion.png',
    },
];

const ImageScreen = () => {
    return(
        <View>
            {
              Cursos.map( (c, index) => <ImageDetail key={index} titulo={c.titulo} /> )
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
