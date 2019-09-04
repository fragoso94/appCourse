import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';

//const ImageDetail = ({titulo, imageSource}) => {
const ImageDetail = (props) => {
    //console.log(imageSource)
    return(
      <View>
          <Image
              //source={ {uri: ''}}
              // source = {imageMap['india.png']}
              //source={ require('../../assets/image/image2.png') }
              style={style.imageCard}
              source={ props.imageSource}
          />
          <Text style={style.textCard}>{props.title} - {props.score}</Text>
      </View>
    );
}

const style = StyleSheet.create({
    imageCard:{
        width: 250,
        height: 150,
        marginRight: 10,
        marginLeft: 20
    },
    textCard:{
        marginLeft: 20
    }
});

export default ImageDetail;