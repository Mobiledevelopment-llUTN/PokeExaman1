/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {style_01} from '../styles/style_01';
import GetPokemons from '../components/getPokemons';

const Home = ({navigation}) => {
    const screenWidth = Dimensions.get('window').width;
    const [selectedGen, setSelectedGen] = useState('');
    const onPressGen = (generation)=>{
        setSelectedGen(generation);
    };
    return (
    <SafeAreaView>
        <View>
        <Image source={require('../imgs/logos/Pokemon.png')} style={{width: screenWidth, height: 160}}></Image>
        <View style={style_01.divHeader}>
            <TouchableOpacity onPress={()=>onPressGen('first-generation')}>
                <View>
                    <Text style={style_01.GenText}>
                        First Generation
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onPressGen('second-generation')}>
                <View>
                    <Text style={style_01.GenText}>
                        Second Generation
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPressGen('third-generation')}>
                <View>
                    <Text style={style_01.GenText}>
                        Third Generation
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPressGen('fourth-generation')}>
                <View>
                    <Text style={style_01.GenText}>
                        Fourth Generation
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPressGen('fifth-generation')}>
                <View>
                    <Text style={style_01.GenText}>
                        Fifth Generation
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <Text style={style_01.tit_01}>Pokemons</Text>
        <GetPokemons navegar={navigation} selectedGen={selectedGen} />
        </View>
    </SafeAreaView>
    );
};

export default Home;
