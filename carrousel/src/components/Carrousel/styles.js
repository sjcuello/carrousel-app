


import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)({
    display: 'flex',
    flexDirection: 'column'
});

export const Conteiner = styled(FlatList)({
    fontSize: 0,
    margin: '60% 3% 10% 3%',
    paddingBottom: 10,
    overflow: 'hidden',
    backgroundColor: '#E3E3D2'
});


export const ButtonContainer = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
});


export const Button = styled(TouchableOpacity)(({ isDisabled }) => ({
    borderRadius: 10,
    height: 50,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: isDisabled ? '#F3E6BE' : '#CEA51F',
    shadowColor: '#000',
}));

export const TextButton = styled(Text)(({ isDisabled }) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: isDisabled ? '#797979' : '#FFFFFF',
}))