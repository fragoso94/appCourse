import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
    {
      Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen
    },
    {
      //initialRouteName: 'Home',
      //initialRouteName: 'Components',
      initialRouteName: 'List',
      defaultNavigationOptions: {
        title: 'App'
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



