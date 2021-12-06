import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import { Design, Dev } from "./AllSvgs";
import ParticleComponent from '../subComponents/ParticleComponent';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';


const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor:pointer;

  font-famuily: "Ubuntu", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
      color: ${(props) => props.theme.body};
      background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover{
    &>*{
        fill: ${(props) => props.theme.body};

    }
}
&:*>:first-child{
    margin-right: 1rem;
}
`;

const Description = styled.div`

color: ${(props) => props.theme.text};
font-size: calc(0.6em + 1vw);
padding :0.5rem 0;
${Main}:hover & { 
  color: ${(props) => props.theme.body};
}



strong{
    margin-bottom:1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`;



const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>

        <LogoComponent theme='light' />
        <SocialIcons theme='light'/> 
        <ParticleComponent theme='light' />
        

        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi consequatur voluptates? 
          </Description>
          <Description>
              <strong>I like to Design</strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul> 
          </Description>
          <Description>
              <strong>Tools</strong>
              <ul>
                <li>Figma</li>                
              </ul> 
          </Description>
        </Main>
        <Main>
          <Title>
            <Dev width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium mollitia a.
          </Description>
          <Description>
          <strong>Skills</strong>
          <p>
              Html, CSS, Javascript, React, Symfony, mySQL, Api-Platform, Wordpress ...
          </p>
           </Description>
           <Description>
              <strong>Tools</strong>
              <ul>
                <li>VScode, PHPStorm, Github, WAMP, ...</li>                
              </ul> 
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
