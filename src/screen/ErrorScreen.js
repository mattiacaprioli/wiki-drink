import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
const ErrorScreen = () => {
  return <Wrapper>
    <h3>Pagina Non Trovata</h3>
    <Lottie options={
      {
        loop: true,
        autoplay: true,
        reverse: true,
        animationData: animationData,
        renderSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      width={500}
      height={500} 
    />
    <Link to='/' className="btn btn-primary" >
      Torna in Home
    </Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  h3 {
    text-transform: uppercase;
  }
  .btn{
    border-radius: 10px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
