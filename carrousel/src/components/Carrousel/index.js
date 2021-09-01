
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wrapper, Conteiner } from './styles'
import CarrouselItem from '../CarrouselItem'

const Carrousel = ({ lista }) => {

    const [positionDef, setPositionDef] = useState(0)

    useEffect(() => {
        async function gettingData() {
            const position = await AsyncStorage.getItem('storedPosition')
            setPositionDef(position);
            console.log(`=====================POSITION======================>`, position)
        }
        gettingData()
        
    }, [])

    const changeStoredPosition = async (position) => {
        console.log('entra changeStoredPosition')
        await AsyncStorage.setItem('storedPosition', `${position}`)
    }

    const handleVieweableItemsChanged = useCallback(({ changed }) => {
        console.log("changed[0].index", changed[0].index);
        setPositionDef(changed[0].index);
        changeStoredPosition(changed[0].index)
    },[]);

    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 }

    return (
        <Wrapper>
            <Conteiner
                horizontal
                onViewableItemsChanged={handleVieweableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                data={lista}
                initialScrollIndex={positionDef}
                renderItem={({item}) => {
                    return (
                        <CarrouselItem key={item.id} item={item} />
                    )
                }}
            >
            </Conteiner>
        </Wrapper>
    )
}

export default Carrousel
