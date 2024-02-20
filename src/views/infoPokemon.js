/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import GetPokemon from '../components/getPokemon';

const InfoPokemon = ({navigation}) => {
    const valores = navigation.getState();
    const url = valores.routes[1].params.url;

    return (
    <SafeAreaView>
        <View>
        <GetPokemon navegar={navigation} url={url} />
        </View>
    </SafeAreaView>
    );
};

export default InfoPokemon;
