
import React from 'react';
import { Card, ImageItem, CardDetail, Title } from './styles'

const CarrouselItem = ({ title, image }) => {
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

