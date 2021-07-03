import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    ${props => props.space === true ?
    `
        margin: 10px;
    ` : null}
    ${props => props.theme === "normal" ? 
            `
                border: 1px solid #ced4da;
                background-color: #0275d8;
                color: #fff;
            `
                :
            `
                border: 1px solid #0275d8;
                color: #0275d8;
                background-color: #fff;
            `
        }
    border-radius: ${props => props.rounded === true ? "16px" : "0"};
    display: ${props => props.display};
    width: ${props => props.width};
    &:hover  {
        cursor: pointer

    }
    
`

export default function Button(props) {
    const { 
        color = 'primary',
        width = "100%",
        rounded = true,
        display = "block",
        space = true,
        onClick = () => {},
        theme = "normal"
    } = props;
    return (
        <>
            <ButtonStyled
                theme={theme}
                type={"button"}
                style={props.style}
                color={color}
                onClick={(e) => onClick(e)}
                width={width}
                rounded={rounded}
                display={display}
                space={space}
                >
                {props.children}
            </ButtonStyled>
        </>
    )
}
