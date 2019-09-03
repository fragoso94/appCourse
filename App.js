import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
    {
      Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen,
        CardImage: ImageScreen
    },
    {
      initialRouteName: 'Home',
      //initialRouteName: 'Components',
      //initialRouteName: 'List',
      defaultNavigationOptions: {
        title: 'Curso de react native'
      }
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <ComponentScreen/>
    </View>
  );
}*/



