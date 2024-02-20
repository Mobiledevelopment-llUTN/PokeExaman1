/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, View, Image, Dimensions} from 'react-native';
import {style_01} from '../styles/style_01';
import GetPokemons from '../components/getPokemons';

const Home = ({navigation}) => {
    const screenWidth = Dimensions.get('window').width;
    return (
    <SafeAreaView>
        <View>
        <Image source={require('../imgs/logos/Pokemon.png')} style={{width: screenWidth, height: 160}}></Image>
        <View style={style_01.divHeader}>
            <Text style={style_01.GenText} onClick={{}}>First Generation</Text>
            <Text style={style_01.GenText}>Second Generation</Text>
            <Text style={style_01.GenText}>Third Generation</Text>
            <Text style={style_01.GenText}>Fourth Generation</Text>
            <Text style={style_01.GenText}>Fifth Generation</Text>
        </View>
        <Text style={style_01.tit_01}>Pokemons</Text>
        <GetPokemons navegar={navigation} />
        </View>
    </SafeAreaView>
    );
};

export default Home;
