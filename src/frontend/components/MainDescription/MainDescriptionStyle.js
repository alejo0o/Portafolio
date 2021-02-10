/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const MainDescriptionContainer = styled.div`
  display: flex;
  margin: 5% auto;
  background-color: #057dcd;
  border-radius: 0.6em;
  max-width: 1400px;
  width: calc(100% - 40px);
  min-height: 525px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 5%;
  }
`;
export const TextDescription = styled.div`
  width: 100%;
  color: white;
  height: 100%;
  align-self: center;
  padding: 0% 5%;
  text-align: justify;
  font-size: large;
  font-family: 'Rubik', Arial, sans-serif;
`;
export const TitleDescription = styled.h2`
  font-weight: 900;
  letter-spacing: -0.06em;
  display: flex;
  text-align: start;
`;

export const DescriptionDecoration = styled.div`
  background-color: #93c9ec;
  width: 4.3em;
  height: 0.1em;
  border-radius: 1em;
  margin-left: 5%;
  margin-top: 3%;
`;
export const ImgDescription = styled.div`
  background-image: url(https://i.ibb.co/N7sNybs/Foto4.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  @media screen and (max-width: 768px) {
    border-radius: 1em;
    margin: 2% 20%;
  }
`;

export const ImgContainer = styled.div`
  width: 70em;
  @media screen and (max-width: 768px) {
    width: 75%;
    height: 22em;
  }
`;
