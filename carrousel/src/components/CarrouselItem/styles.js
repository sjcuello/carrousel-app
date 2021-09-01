


import { View, Image, Text } from 'react-native';
import styled from 'styled-components';


export const Card = styled(View)({
    borderRadius: 20,
    width: 200,
    height: 250,
    marginRight: 10,
    fontSize: 20,
});

export const ImageItem = styled(Image)({
    width: 200,
    height: 250,
});

export const CardDetail = styled(View)({
    alignItems: 'flex-start',
    background: 'white',
    bottom: 0,
    display: 'flex',
    fontSize: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
});


export const Title = styled(Text)({
    color: 'black',
    margin: 5,
});