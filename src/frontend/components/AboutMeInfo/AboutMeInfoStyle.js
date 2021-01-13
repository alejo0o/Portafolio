/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
//30 210 0
export const NeonButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #0e86d4;
  font-size: 18px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  &:nth-child(2) {
    filter: hue-rotate(300deg);
  }
  &:nth-child(3) {
    filter: hue-rotate(40deg);
  }

  &:hover {
    background: #0e86d4;
    color: #fff;
    box-shadow: 0 0 5px #0e86d4, 0 0 25px #0e86d4, 0 0 50px #0e86d4,
      0 0 200px #0e86d4;
  }
  span {
    position: absolute;
    display: block;
  }
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0e86d4);
    animation: animate1 1s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #0e86d4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #0e86d4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #0e86d4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  @media screen and (max-width: 728px) {
    font-size: 18px;
    -webkit-box-reflect: unset;
  }
`;

export const ImageBorder = styled.div`
  width: 80%;
  min-width: 23em;
  height: 20em;
  border: 5px solid;
  margin-left: 3em;
  border-image-source: linear-gradient(45deg, #75e6da, #043bb1);
  border-image-slice: 1;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 2% 10%;
    min-width: auto;
    height: auto;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  font-size: 1.2em;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
export const TextContainer = styled.div`
  text-align: justify;
  padding: 3%;
  border-radius: 1em;
  background: #1c6cae;
  color: white;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;
export const InfoContainer = styled.div`
  text-align: center;
`;
