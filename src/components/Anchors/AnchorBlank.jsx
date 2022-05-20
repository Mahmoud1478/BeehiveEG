import React from 'react'
import styled from 'styled-components';
import { BaseAnchor } from '../stylesJs/globales.styles';
const Anchor = styled(BaseAnchor)`
`;
const AnchorBlank = (props) => {
    return (
        <Anchor {...props} > {props.children} </Anchor>
    )
}

export default AnchorBlank