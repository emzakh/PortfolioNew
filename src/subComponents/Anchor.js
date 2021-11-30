import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";

const Container = styled.div`
  position: relative;

  ${mediaQueries(40)`
    
display:none;



`};
`;
const Slider = styled.div`
  position: fixed;
  bottom: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  .chain {
    transform: rotate(135deg);
  }
`;

// const PreDisplay = styled.div`
//   position: absolute;
//   top: 0;
//   right: 2rem;
// `;

const AnchorComponent = (props) => {
  const ref = useRef(null);
//   const hiddenRef = useRef(null);


const handleScroll = () => {
    let scrollPosition = window.pageYOffset;
    let windowSize = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;

    let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
    let diffP = (diff * 100) / (bodyHeight - windowSize);
    let decal = diffP * 0.7;
  //   ref.current.style.transform = `translateY(${-diffP}%)`;
    ref.current.style.bottom = `calc(${diffP}% - ${decal}px)  `;

    console.log(diffP);   


  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
};
  useEffect(handleScroll, [handleScroll]);

  return (
    <Container>

      <Slider ref={ref}>
        {[...Array(props.number)].map((x, id) => {
          return (
            <Link
              key={id}
              style={{ padding: "0.1rem 0" }}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
