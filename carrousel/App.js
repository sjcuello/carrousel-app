import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Tittle } from './App.styled'

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View >
          <Tittle>Hola Mundo</Tittle>
        </View>
      </SafeAreaView>
    </>
  );


}