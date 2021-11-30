import React from 'react'
import styled from 'styled-components'
import {darkTheme, mediaQueries} from '../components/Themes'
import { NavLink } from 'react-router-dom'


const Logo = styled.h1`
display:inline-block;
color:${props=>props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family:'Pacifico', cursive;

position:fixed;
left:2rem;
top:2rem;
z-index:6;

${mediaQueries(40)`    
font-size:1.5em;
left:1rem;
top:2rem;


`};
`

const LogoComponent = (props) => {
    return (

        <NavLink to="/" >
        <Logo to="/" color={props.theme}>
            MGM
        </Logo>
        </NavLink>
    )
}

export default LogoComponent
