
import React from 'react'
import { Wrapper, Conteiner} from './styles'

const Carrousel = ({ children }) => {
    return (
        <Wrapper>
            <Conteiner>
                {children}
            </Conteiner>
        </Wrapper>
    
    )
}

export default Carrousel
