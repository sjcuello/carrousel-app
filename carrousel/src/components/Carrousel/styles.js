


import { FlatList, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)({
    display: 'flex',
    flexDirection: 'column'
});

export const Conteiner = styled(FlatList)({
    fontSize: 0,
    margin: '50% 5% 10% 5%',
    paddingBottom: 10,
    overflow: 'hidden'
});
