import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({titulo, img}) => {
    console.log(img)
    return(
      <View>
          <Image
              //source={ {uri: ''}}
              source={ require('../../assets/image/image2.png') }
          />
          <Text>{titulo}</Text>
      </View>
    );
}

export default ImageDetail;