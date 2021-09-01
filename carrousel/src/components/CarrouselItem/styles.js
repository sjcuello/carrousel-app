


import { View, Image, Text } from 'react-native';
import styled from 'styled-components';


export const Card = styled(View)({
    borderRadius: 20,
    width: 120,
    height: 250,
    marginRight: 10,
    fontSize: 20,
});

export const ImageItem = styled(Image)({
    width: 120,
    height: 250,
});

export const CardDetail = styled(View)({
    alignItems: 'flex-start',
    background: 'red',
    bottom: 0,
    display: 'flex',
    fontSize: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
});


export const Title = styled(Text)({
    color: 'black'
});