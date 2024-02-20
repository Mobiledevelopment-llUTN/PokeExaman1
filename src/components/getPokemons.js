/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
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
    const selectedGen = props.selectedGen;
    const nav = props.navegar;
    const [result, setData] = useState([]);

    const getGen = (gen) => {
      switch (gen) {
        case 'first-generation':
          return 'offset=0&limit=151 ';
        case 'second-generation':
          return 'offset=151&limit=100';
        case 'third-generation':
          return 'offset=251&limit=135 ';
        case 'fourt-generation':
          return 'offset=386&limit=107 ';
        case 'fifth-generation':
          return 'offset=493&limit=156 ';
        default:
          return 'offset=0&limit=151 ';
      }
    };

    const Obtener = async () => {
    const generation = (getGen(selectedGen));
    console.log(generation);
    try {
        axios.get(`${PATHURL}?${generation}`).then(response => {
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
					<View style={style_01.containerStyle}>
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
