
import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Conteiner } from './styles'
import { Title } from '../../../GlobalStyles'
import CarrouselItem from '../CarrouselItem'

const Carrousel = ({ lista }) => {
    const onViewableItemsChanged = ({ viewableItems, changed } = {}) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
    }

    return (

        <Wrapper>
            {
                console.log('monto:', lista)
            }
            <Conteiner
                horizontal
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 70
                }}
                data={lista}
                initialScrollIndex={1}
                renderItem={({item, index}) => {
                    console.log('FlatList item', item);
                    console.log('FlatList index', index);
          
                    return (
                      <CarrouselItem key={item.id} item={item}/>
                    )
                  }}
            >
            </Conteiner>
        </Wrapper>
    )
}

export default Carrousel
