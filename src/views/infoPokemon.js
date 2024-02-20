/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import GetPokemon from '../components/getPokemon';

const InfoPokemon = ({navigation}) => {
    const valores = navigation.getState();
    const token = valores.routes[1].params.token;

    return (
    <SafeAreaView>
        <View>
        <GetPokemon navegar={navigation} token={token} />
        </View>
    </SafeAreaView>
    );
};

export default InfoPokemon;
