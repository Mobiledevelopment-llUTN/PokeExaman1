/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {PATHURL, IMAGEPATHURL} from './config/config';
import {style_01} from '../styles/style_01';

import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import axios from 'axios';

const GetPokemons = props => {
    const nav = props.navegar;
    const Generation = props.gen;
    const [result, setData] = useState([]);

    const Obtener = async () => {
    try {
        axios.get(`${PATHURL}/`).then(response => {
        const json = response.data;
        setData(json.results);
        });
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
    Obtener();
    }, []);

    const onPressViewPokemon = url => {
    nav.navigate('InfoPokemon', {url: url});
    };

    return (
    <SafeAreaView>
         <FlatList
				data={result}
				keyExtractor={({id}, index) => id}
				renderItem={({item}) => (
				  <TouchableOpacity key={item.name} style={style_01.itemText} onPress={() => onPressViewPokemon(item.url)}>
					<View>
					  <Text style={style_01.tit_02}>{item.name}</Text>
                      <Image source={{
                        uri: `${IMAGEPATHURL}/${item.name}.png`,
                      }} style={style_01.pokeImgs}/>
					</View>
				  </TouchableOpacity>
				)}
			  />
    </SafeAreaView>
    );
};

export default GetPokemons;
