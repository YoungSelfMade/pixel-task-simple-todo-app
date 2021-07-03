import React from 'react';
import styled from 'styled-components'


const FlexStyled = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
    width: 100%;
`

export default function Flex(props) {
    const { justify = 'flex-start', align = 'flex-start', flexDirection = "row", ...restProps } = props;
    return (
        <>
          <FlexStyled justify={justify} align={align} flexDirection={flexDirection}>
              {props.children}
          </FlexStyled>
        </>
    )
}

