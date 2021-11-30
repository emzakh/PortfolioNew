import React from 'react'
import styled from 'styled-components'
import {darkTheme, mediaQueries} from '../components/Themes'


const Logo = styled.h1`
display:inline-block;
color:${props=>props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family:'Pacifico', cursive;

position:fixed;
left:2rem;
top:2rem;
z-index:6;

${mediaQueries(40)`    
position:relative;


`};
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            MGM
        </Logo>
    )
}

export default LogoComponent
