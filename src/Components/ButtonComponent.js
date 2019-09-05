import React from 'react';
import {Button} from "react-native";

const ButtonComponent = ({title, route}) =>
{
    return(
        <Button
            title={title}
            onPress={ ()=> route()}
        />
    );
}

export default ButtonComponent;