import React, {Fragment} from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from "../Components/ImageDetail";
import { Card, Button, Text } from 'react-native-elements';
import CardView from "../Components/CardView";

const Cursos = [
    {
        'titulo' : 'React desde cero',
        'img' : '\'../../assets/image/image2.png\''
    },
    {
        'titulo' : 'Firebase con android',
        'img' : '\'../../assets/image/image2.png\''
    },
    {
        'titulo' : 'CEO Avanzado',
        'img' : '\'../../assets/image/image2.png\''
    },
    {
        'titulo' : "Conmutación de redes",
        'img' : '\'../../assets/image/image2.png\''
    },
];

const ImageScreen = () => {
    Cursos.map( (c)=> console.log(c.img));
    return(
        <View>
            <ScrollView contentContainerStyle={styles.contentContainer}>

                {
                  //Cursos.map( (c, index) => <ImageDetail key={index} titulo={c.titulo} imageSource={c.img} /> )
                }
                <ImageDetail title= "Forest" imageSource={require('../../assets/image/image2.png')} score="9" />
                <ImageDetail title= "Beach" imageSource={require('../../assets/image/image2.png')} score="10" />
                <CardView
                    title= 'React desde cero'
                    image={require('../../assets/image/image1.png')}
                />
                <CardView
                    title= 'Firebase con android'
                    image={require('../../assets/image/image2.png')}
                />
                <CardView
                    title= 'CEO Avanzado'
                    image={require('../../assets/image/image3.png')}
                />
                <CardView
                    title= 'Conmutación de redes'
                    image={require('../../assets/image/image4.png')}
                />
                {/*
                    Cursos.map(
                        (c, index) =>
                            <CardView
                                key ={index}
                                title={c.titulo}
                                // title='HELLO WORLD'
                                image={require('../../assets/image/image1.png')}
                            />
                    )
                */}
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
