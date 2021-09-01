import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Tittle } from './GlobalStyles'
import Carrousel from './src/components/Carrousel';
import CarrouselItem from './src/components/CarrouselItem';

export default function App() {
  const lista = [
    {
      "id": "2",
      "title": "In the Dark",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff",
    },
    {
      "id": "3",
      "title": "Instinct",
      "image": "http://dummyimage.com/800x600.png/302140/ffffff",
    },
    {
      "id": "4",
      "title": "Grand Hotel",
      "image": "http://dummyimage.com/800x600.png/5472FF/ffffff",
    },
    {
      "id": "5",
      "title": "Stargate Atlantis",
      "image": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    },
    {
      "id": "6",
      "title": "In the Dark",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff",
    },
    {
      "id": "7",
      "title": "Instinct",
      "image": "http://dummyimage.com/800x600.png/302140/ffffff",
    },
    {
      "id": "8",
      "title": "Grand Hotel",
      "image": "http://dummyimage.com/800x600.png/5472FF/ffffff",
    },
    {
      "id": "9",
      "title": "Stargate Atlantis",
      "image": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    },
    {
      "id": "10",
      "title": "Stargate Atlantis2",
      "image": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    },
    {
      "id": "11",
      "title": "Stargate Atlantis3",
      "image": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    },
    {
      "id": "12",
      "title": "Stargate Atlantis4",
      "image": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    }
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Carrousel lista={lista}/>
        </View>
      </SafeAreaView>
    </>
  );
}