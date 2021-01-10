// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const SlideInEffect = styled.div`
  display: flex;

  -webkit-animation: slide-in-fwd-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-fwd-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  animation-delay: 1s;

  @-webkit-keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const CircleDiv = styled.div`
  width: 100px;
  margin: auto;
  padding: 0.5em;
  background-color: #60a3d9;
  border-radius: 50%;
  display: inline-block;
  @media screen and (max-width: 768px) {
    width: 90px;
  }
  @media screen and (max-width: 570px) {
    width: 70px;
  }
  @media screen and (max-width: 450px) {
    width: 50px;
  }
`;

export const DivHearthBeat = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.flexStart ? 'flex-start' : 'flex-end')};

  padding: 0 5%;
  -webkit-animation: heartbeat 1.5s ease-in-out 1 both;
  animation: heartbeat 1.5s ease-in-out 1 both;

  animation-delay: 1.5s;

  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;
