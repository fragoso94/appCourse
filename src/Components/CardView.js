import React, {Fragment} from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

const CardView = (props) =>
{
    return(
        <Card
            title = {props.title}
            image = {props.image}
            //title='HELLO WORLD'
            //image={require('../../assets/image/image2.png')}
        >
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
                //icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Ver ahora' />
        </Card>
    );
}

export default CardView;


