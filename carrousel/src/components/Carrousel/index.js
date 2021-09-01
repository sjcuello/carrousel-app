
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wrapper, Conteiner } from './styles'
import CarrouselItem from '../CarrouselItem'
import { Button } from 'react-native';

const Carrousel = ({ lista }) => {

    const [positionDef, setPositionDef] = useState(0)
    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrevious, setDisabledPrevious] = useState(false)


    useEffect(() => {
        async function gettingData() {
            const position = await AsyncStorage.getItem('storedPosition')
            setPositionDef(position);
            extremePointsControl(position)
        }
        gettingData()
    }, [])

    const extremePointsControl = (index) => {
        setDisabledNext(index === lista.length - 1)
        setDisabledPrevious(index === 0)
    }

    const handleVieweableItemsChanged = useCallback(({ changed }) => {
        console.log("changed[0].index", changed[0].index);
        setPositionDef(changed[0].index);
        AsyncStorage.setItem('storedPosition', `${changed[0].index}`)
        extremePointsControl(changed[0].index)
    }, []);

    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 }

    const nextItem = () => {
        let newPosition = positionDef + 1
        setPositionDef(newPosition)
        flatListRef.scrollToIndex({ animated: true, index: newPosition });
    }

    const previousItem = () => {
        let newPosition = positionDef - 1
        setPositionDef(newPosition)
        flatListRef.scrollToIndex({ animated: true, index: newPosition });
    }

    return (
        <Wrapper>
            <Conteiner
                horizontal
                onViewableItemsChanged={handleVieweableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                data={lista}
                initialScrollIndex={positionDef}
                ref={(ref) => { this.flatListRef = ref; }}
                renderItem={({ item }) => {
                    return (
                        <CarrouselItem key={item.id} item={item} />
                    )
                }}
            >

            </Conteiner>
            <Button
                title="Next"
                disabled={disabledNext}
                onPress={() => nextItem()}
            />

            <Button
                title="Previous"
                disabled={disabledPrevious}
                onPress={() => previousItem()}
            />
        </Wrapper>
    )
}

export default Carrousel
