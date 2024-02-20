/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
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
    ScrollView,
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
            setData(json);
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
        <ScrollView>
        <Image source={require('../imgs/logos/Pokemon.png')} style={{width: screenWidth, height: 160}}></Image>
        <Text style={style_01.tit_01}> Pokemon Information</Text>
            <View style={style_01.card}>
                <Text style={style_01.tit_02}>{result.name}</Text>
                <View style={style_01.containerStyle}>
                    <Image source={{uri: `${IMAGEPATHURL}/${result.name}.png`}} style={style_01.pokeImgs}/>
                    <Text style={style_01.tit_02}>Features</Text>
                    <Text style={style_01.infoText}>-Code:{result.id}</Text>
                    <Text style={style_01.infoText}>-Height:{result.height}</Text>
                    <Text style={style_01.infoText}>-Weight:{result.weight}</Text>
                </View>
            </View>
            <View style={style_01.card}>
                <Text style={style_01.tit_02}>Types to Belong</Text>
            </View>
            <FlatList
				data={result.types}
				keyExtractor={({slot}, index) => slot}
				renderItem={({item}) => (
                <TouchableOpacity
                key={item.title}>
                <View>
                    <Text style={style_01.infoText}>{item.type.name}</Text>
                </View>
                </TouchableOpacity>
            )}
            />
            <View style={style_01.card}>
                <Text style={style_01.tit_02}>Moves</Text>
            </View>
            <FlatList
				data={result.moves}
				keyExtractor={({id}, index) => id}
				renderItem={({item}) => (
                <TouchableOpacity
                key={item.title}>
                <View>
                    <Text style={style_01.infoText}>{item.move.name}</Text>
                </View>
                </TouchableOpacity>
            )}
            />
            </ScrollView>
    </SafeAreaView>
    );
};

export default GetPokemon;
