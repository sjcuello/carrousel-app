import React from 'react';
import { SafeAreaView } from 'react-native';

import { Layout } from './GlobalStyles'
import Carrousel from './src/components/Carrousel';

export default function App() {
  const lista = [
    {
      "id": "2",
      "title": "Title 1",
      "image": "https://dummyimage.com/600x800/65d1f5/2e2e2e.png&text=Imagen+1",
    },
    {
      "id": "3",
      "title": "Title 2",
      "image": "https://dummyimage.com/600x800/4ca6c4/2e2e2e.png&text=Imagen+2",
    },
    {
      "id": "4",
      "title": "Title 3",
      "image": "https://dummyimage.com/600x800/357a91/2e2e2e.png&text=Imagen+3",
    },
    {
      "id": "5",
      "title": "Title 4",
      "image": "https://dummyimage.com/600x800/de5b5b/2e2e2e.png&text=Imagen+4",
    },
    {
      "id": "6",
      "title": "Title 5",
      "image": "https://dummyimage.com/600x800/b34b4b/2e2e2e.png&text=Imagen+5",
    },
    {
      "id": "7",
      "title": "Title 6",
      "image": "https://dummyimage.com/600x800/8f3c3c/2e2e2e.png&text=Imagen+6",
    },
    {
      "id": "8",
      "title": "Title 7",
      "image": "https://dummyimage.com/600x800/82db6b/2e2e2e.png&text=Imagen+7",
    },
    {
      "id": "9",
      "title": "Title 8",
      "image": "https://dummyimage.com/600x800/61a14f/2e2e2e.png&text=Imagen+8",
    },
    {
      "id": "10",
      "title": "Title 9",
      "image": "https://dummyimage.com/600x800/4b7a3d/2e2e2e.png&text=Imagen+9",
    },
    {
      "id": "11",
      "title": "Title 10",
      "image": "https://dummyimage.com/600x800/6b6ed6/2e2e2e.png&text=Imagen+10",
    },
  ];

  return (
    
      <SafeAreaView style={{ flex: 1 }}>
        <Layout>
          <Carrousel lista={lista}/>
        </Layout>
      </SafeAreaView>
  );
}