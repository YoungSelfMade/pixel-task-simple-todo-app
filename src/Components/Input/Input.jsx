import React from 'react'
import styled from 'styled-components';

const InputStyled = styled.input`
    border: ${props => props.border ? props.border : "1px solid #ced4da"};
    border-radius: ${props => props.radius ? props.radius : "10px"}; ;
    display: ${props => props.display ? props.display : "block"}; ;
    width: ${props => props.width ? props.width : "100%"}; ;
`

export default function Input(props) {
    const { border = '1px solid #ced4da', width = "100%", radius = "10px", display = "block" } = props;

    return (
        <>
          <InputStyled
            border={border}
            width={width}
            radius={radius}
            display={display}
            onChange={(e) => props.onChange(e)}
            value={props.value}
          />  
        </>
    )
}
