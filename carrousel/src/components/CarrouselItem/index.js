
import React from 'react';
import { Card, ImageItem, CardDetail, Title } from './styles'

const CarrouselItem = ({ item }) => {

    const {title, image} = item
    console.log('entra item')

    return (
        <Card>
            <ImageItem source={{uri: image}}/>
            <CardDetail>
                <Title>{title}</Title>
            </CardDetail>
        </Card>

    )

}


export default CarrouselItem

