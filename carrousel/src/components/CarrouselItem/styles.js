


import { View, Image, Text } from 'react-native';
import styled from 'styled-components';


export const Card = styled(View)({
    borderRadius: 5,
    width: 130,
    height: 195,
    marginRight: 10,
    boxShadow: '10px 5px 5px black'
});

export const ImageItem = styled(Image)({
    flex: 1,
    height: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
});

export const CardDetail = styled(View)({
    width: '100%',
    height: '10%',
    background: '#DCCD9C',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    display: 'flex',
    justifyContent: 'center'
});


export const Title = styled(Text)({
    fontSize: 15,
    color: '#7E6F3D',
    fontWeight: 'bold',
    textAlign: 'center'
});