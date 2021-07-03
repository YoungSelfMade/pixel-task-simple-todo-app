import React from 'react'
import styled from 'styled-components';

const GroupButtonStyled =  styled.div`
        margin-bottom: 1rem;
        font-size: 0;
        padding: 1rem;
        text-align: center;
`;

export default function GroupButton(props) {
    return (
        <GroupButtonStyled>
            {props.children}            
        </GroupButtonStyled>
    
    )
}
