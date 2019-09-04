import React, {Fragment} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
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
            <ScrollView contentContainerStyle={styles.contentContainer}>

                {
                  //Cursos.map( (c, index) => <ImageDetail key={index} titulo={c.titulo} imageSource={c.img} /> )
                }
                <ImageDetail title= "Forest" imageSource={require('../../assets/image/image2.png')} />
                <ImageDetail title= "Beach" imageSource={require('../../assets/image/image2.png')} />
                <ImageDetail title= "Mountain" imageSource={require('../../assets/image/image2.png')} />
            </ScrollView>
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
    contentContainer: {
        paddingVertical: 20
    }
});

//make this component available to the app
export default ImageScreen;
