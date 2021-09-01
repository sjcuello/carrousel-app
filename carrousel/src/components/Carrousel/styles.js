


import { FlatList, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)({
    display: 'flex',
    flexDirection: 'column'
});

export const Conteiner = styled(FlatList)({
    fontSize: 0,
    margin: 70,
    paddingBottom: 10,
    overflow: 'hidden'
});
