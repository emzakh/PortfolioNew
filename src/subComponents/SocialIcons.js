import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Twitter, YouTube } from '../components/AllSvgs'
import styled from 'styled-components'
import {darkTheme, mediaQueries} from '../components/Themes'

const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;

z-index:3;

&>*:not(:last-child){
    margin:0.5rem 0;
    ${mediaQueries(20)`
    margin: 0.3rem 0;


`};
}
${mediaQueries(40)`
left: 1rem;

    svg{
      width:20px;
      height:20px
    }

`};
`

const Line = styled.span`
width:2px;
height:8rem;
background-color:${props=>props.color ==='dark' ? darkTheme.text : darkTheme.body}


`

const SocialIcons = (props) => {
    const mq = window.matchMedia("(max-width: 40em)").matches;

    return (
        <Icons>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/mgmaximino"}}>
                    <Github width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/MGMaximino"}}>
                    <Twitter width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </div>       
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/channel/UCzadYEGdS1Rzl0wdtq8r8tg"}}>
                    <YouTube width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </div>

             <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
        </Icons>
    )
}

export default SocialIcons
