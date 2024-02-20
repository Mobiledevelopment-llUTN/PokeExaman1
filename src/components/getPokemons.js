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
    const [results, setData] = useState([]);

    const Obtener = async () => {
    try {
        axios.get(`${PATHURL}`).then(response => {
        const json = response.results;
        setData(json.results);
        });
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
    Obtener();
    }, []);

    const onPressViewArticle = url => {
    nav.navigate('InfoPokemon', {url: url});
    };

    return (
    <SafeAreaView>
         <FlatList
				data={results.results}
				keyExtractor={({url}, index) => url}
				renderItem={({item}) => (
				  <TouchableOpacity key={item.name} style={style_01.itemText} onPress={() => onPressViewArticle(results.url)}>
					<View>
					  <Text style={style_01.tit_02}>{item.name}</Text>
                      <Image source={{
                        uri: '`${IMAGEPATHURL}`/item.name',
                      }}/>
					</View>
				  </TouchableOpacity>
				)}
			  />
    </SafeAreaView>
    );
};

export default GetPokemons;
