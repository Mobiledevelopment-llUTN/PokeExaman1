/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const principal = '#4673b8';

export const style_01 = StyleSheet.create({
    tit_01: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
    },
    itemText: {
    backgroundColor: '#DDDDEE',
    borderRadius: 10,
    margin: 3,
    },
    itemText2: {
    backgroundColor: '#355DA8',
    marginTop: 1,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
    padding: 8,
    },
    tit_02: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 110,
    alignText: 'center',
    },
    tit_03: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify',
    },
    tit_04: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F4CC1B',
    },
    row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    card: {
    backgroundColor: '#F4CC1B',
    borderColor: '#355DA8',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    margin: 5,
    padding: 5,
    },
    bold: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 20,
    },
    divHeader:{
        backgroundColor : principal,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 110,
    },
    pokeImgs:{
        height: 140,
        width: 140,
    },
    GenText:{
        color: 'yellow',
        paddingLeft: 34,
        paddingTop: 13,
    },
    containerStyle : {
        flexDirection: 'row',
        alignItems: 'center',
      },
    infoText:{
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
    },
});
