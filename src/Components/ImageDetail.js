import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';

//const ImageDetail = ({titulo, imageSource}) => {
const ImageDetail = (props) => {
    //console.log(imageSource)
    return(
      <View>
          <Text>Imagenes</Text>
          <Image
              //source={ {uri: ''}}
              // source = {imageMap['india.png']}
              //source={ require('../../assets/image/image2.png') }
              source={ props.imageSource}
          />
      </View>
    );
}

export default ImageDetail;