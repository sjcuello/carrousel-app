
import React from 'react';
import { Card, ImageItem, CardDetail, Title } from './styles'

const CarrouselItem = ({ item }) => {

    const { title, image} = item

    return (
        <Card>
            <CardDetail>
                <Title>{title}</Title>
            </CardDetail>
            <ImageItem source={{ uri: image }} />
        </Card>

    )

}


export default CarrouselItem

