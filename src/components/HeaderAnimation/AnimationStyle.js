/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Img = styled.img`
  width: 68px;
  @media screen and (max-width: 768px) {
    width: 58px;
  }
  @media screen and (max-width: 570px) {
    width: 55px;
  }
  @media screen and (max-width: 450px) {
    width: 38px;
  }
`;

export const ImageEffect = styled.img`
  width: 68px;
  -webkit-animation: ${(props) => (props.right ? 'slide-right' : 'slide-left')}
    0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${(props) => (props.right ? 'slide-right' : 'slide-left')} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 2.5s;

  @-webkit-keyframes ${(props) =>
    props.right ? 'slide-right' : 'slide-left'} {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(
        ${(props) => (props.right ? '15em' : '-15em')}
      );
      transform: translateX(${(props) => (props.right ? '15em' : '-15em')});
    }
  }
  @keyframes ${(props) => (props.right ? 'slide-right' : 'slide-left')} {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(
        ${(props) => (props.right ? '15em' : '-15em')}
      );
      transform: translateX(${(props) => (props.right ? '15em' : '-15em')});
    }
  }

  @media screen and (max-width: 950px) {
    width: 58px;
    @-webkit-keyframes ${(props) =>
      props.right ? 'slide-right' : 'slide-left'} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '8em' : '-8em')}
        );
        transform: translateX(${(props) => (props.right ? '8em' : '-8em')});
      }
    }
    @keyframes ${(props) => (props.right ? 'slide-right' : 'slide-left')} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '8em' : '-8em')}
        );
        transform: translateX(${(props) => (props.right ? '8em' : '-8em')});
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 58px;
    @-webkit-keyframes ${(props) =>
      props.right ? 'slide-right' : 'slide-left'} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '6em' : '-6em')}
        );
        transform: translateX(${(props) => (props.right ? '6em' : '-6em')});
      }
    }
    @keyframes ${(props) => (props.right ? 'slide-right' : 'slide-left')} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '6em' : '-6em')}
        );
        transform: translateX(${(props) => (props.right ? '6em' : '-6em')});
      }
    }
  }
  @media screen and (max-width: 570px) {
    width: 55px;
    @-webkit-keyframes ${(props) =>
      props.right ? 'slide-right' : 'slide-left'} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '3em' : '-3em')}
        );
        transform: translateX(${(props) => (props.right ? '3em' : '-3em')});
      }
    }
    @keyframes ${(props) => (props.right ? 'slide-right' : 'slide-left')} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '3em' : '-3em')}
        );
        transform: translateX(${(props) => (props.right ? '3em' : '-3em')});
      }
    }
  }
  @media screen and (max-width: 450px) {
    width: 38px;
    @-webkit-keyframes ${(props) =>
      props.right ? 'slide-right' : 'slide-left'} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '1.5em' : '-1.5em')}
        );
        transform: translateX(${(props) => (props.right ? '1.5em' : '-1.5em')});
      }
    }
    @keyframes ${(props) => (props.right ? 'slide-right' : 'slide-left')} {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(
          ${(props) => (props.right ? '1.5em' : '-1.5em')}
        );
        transform: translateX(${(props) => (props.right ? '1.5em' : '-1.5em')});
      }
    }
  }
`;

//////
export const Computer = styled.img`
  width: 75px;
  -webkit-animation: slide-in-fwd-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  animation: slide-in-fwd-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 2.5s;

  @-webkit-keyframes slide-in-fwd-bottom {
    0% {
      -webkit-transform: translateZ(-1400px) translateY(200px);
      transform: translateZ(-1400px) translateY(200px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-fwd-bottom {
    0% {
      -webkit-transform: translateZ(-1400px) translateY(200px);
      transform: translateZ(-1400px) translateY(200px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    width: 75px;
  }
  @media screen and (max-width: 570px) {
    width: 55px;
  }
  @media screen and (max-width: 450px) {
    width: 35px;
  }
`;

export const Name = styled.h1`
  font-size: 4em;

  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  animation-delay: 3s;

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
  @media screen and (max-width: 450px) {
    font-size: 2em;
  }
`;
export const Profesion = styled.span`
  font-size: 2.3em;

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.8em;
  }

  -webkit-animation: text-flicker-in-glow 4s linear both;
  animation: text-flicker-in-glow 4s linear both;

  animation-delay: 3.5s;

  @-webkit-keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
  }
  @keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
  }
`;

export const BgVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`;
export const PageHeader = styled.header`
  position: relative;
  color: white;
  background-color: black;
  width: 100%;
  overflow: hidden;
  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #003b73;
    opacity: 0.7;
    z-index: 1;
  }
`;
