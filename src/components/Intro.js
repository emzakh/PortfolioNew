import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";
import { mediaQueries } from "./Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  ${mediaQueries(1200)`
  width: 65vw;
`};

${mediaQueries(60)`
  width: 70vw;
`};

${mediaQueries(50)`
  width: 50vw;
  background-size: 100% 2px;

  flex-direction:column;
  justify-content:space-between;

`};

${mediaQueries(40)`
  width: 60vw;
  

`};

${mediaQueries(30)`
  width: 70vw;
  

`};
${mediaQueries(20)`
  width: 60vw;
  

`};

@media only screen and (max-width: 50em) {
  background: none;
  border: none;
  border-top: 2px solid ${(props) => props.theme.body};
  border-bottom: 2px solid ${(props) => props.theme.text};
  background-image: linear-gradient(
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    ),
    linear-gradient(
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    );
  background-size: 2px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
}

//height:55vh;
`;


const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  ${mediaQueries(50)`
  width: 100%;
height: 50%;
  .pic {

width: 100%;
}
`};
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {

  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "Inertia", duration: 1, delay: 1 }}
    >
      <SubBox>
 
        <Text>
  
          <h1>Hi,</h1>
          <h3>I'm Maximino.</h3>
          <h6>I build full stack web applications.</h6>
         
        </Text>
      
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
