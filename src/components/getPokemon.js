/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {PATHURL, IMAGEPATHURL} from './config/config';
import {style_01} from '../styles/style_01';

import {
    FlatList,
    SafeAreaView,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';
import axios from 'axios';
const GetPokemon = props => {
    const screenWidth = Dimensions.get('window').width;
    const url = props.url;

    const [result, setData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const Obtener = async () => {
        try {
            axios.get(`${url}`).then(response => {
            const json = response.data;
            setData(json.results); console.log(result);
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
    Obtener();
    }, [Obtener]);


    return (
    <SafeAreaView>
        <Image source={require('../imgs/logos/Pokemon.png')} style={{width: screenWidth, height: 160}}></Image>
        <Text style={style_01.tit_01}> Pokemon Information</Text>
        <View style={style_01.card}>
        <Image source={{uri: `${IMAGEPATHURL}/${result.name}.png`}} style={style_01.pokeImgs}/>
        <Text style={style_01.tit_02}>{url}</Text>
        </View>
        <View style={style_01.card}>
        <Text style={style_01.tit_02}>Types to Belong</Text>
        </View>
        <View style={style_01.card}>
        <Text style={style_01.tit_02}>Moves</Text>
        </View>
    </SafeAreaView>
    );
};

export default GetPokemon;
