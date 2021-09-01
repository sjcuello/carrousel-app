
import React from 'react';
import { Text } from 'react-native';
import { Card, ImageItem, CardDetail, Title } from './styles'

const CarrouselItem = ({ item }) => {

    const { title, image, id } = item

    return (
        <Card>
            <CardDetail>
                <Title>{title} id:{id}</Title>
            </CardDetail>
            <ImageItem source={{ uri: image }} />
        </Card>

    )

}


export default CarrouselItem

