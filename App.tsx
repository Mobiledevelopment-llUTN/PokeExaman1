/* eslint-disable prettier/prettier */
/* call react libraries */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import Home from './src/views/home';
import InfoPokemon from './src/views/infoPokemon';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    <Stack.Screen
      name="InfoPokemon"
      component={InfoPokemon}
      options={{title: 'Pokemon data'}}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
