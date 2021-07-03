import React from 'react'
import styled from 'styled-components'

import {AddToDo, ListToDo, Flex} from 'Components';

const TitleStyled = styled.div`
    background-color: #4478de;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    color: #fff;
    font-size: ${props => props.fontSize ? props.fontSize : "2em"};
    font-family: "IranSansBold";
    text-align: center
`;

export default function Main() {
    return (
        <>
            <TitleStyled> Simple ToDo App!</TitleStyled>  

            <Flex justify={"center"}  >
                <AddToDo />
                <ListToDo />        
            </Flex>
        </>
    )
}
