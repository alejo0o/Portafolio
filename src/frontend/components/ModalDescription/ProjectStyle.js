// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  margin: auto;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
  @media screen and (max-width: 450px) {
    font-size: 2em;
  }
`;
export const Icons = styled.img`
  width: 48px;
  min-width: 48px;
  cursor: pointer;
  &:hover {
    -webkit-animation: rotate-in-center 0.6s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: rotate-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes rotate-in-center {
    0% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @keyframes rotate-in-center {
    0% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
`;
