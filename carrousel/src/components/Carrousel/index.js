
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
        console.log(`index extremePointsControl`, index)
        setDisabledNext(Math.min(index + 2, lista.length - 1)  === lista.length - 1)
        setDisabledPrevious(index === 0)
    }

    const handleVieweableItemsChanged = useCallback(({viewableItems}) => {
        console.log(`viewableItems`, viewableItems)
        setPositionDef(viewableItems[0].index);
        AsyncStorage.setItem('storedPosition', `${viewableItems[0].index}`)
        extremePointsControl(viewableItems[0].index)
    }, []);

    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 100 }

    const nextItem = () => {
        let newPosition = Math.min(positionDef + 2,lista.length - 1)
        setPositionDef(newPosition)
        flatListRef.scrollToIndex({ animated: true, index: newPosition });
    }

    const previousItem = () => {
        let newPosition = Math.max(positionDef - 2, 0)
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
