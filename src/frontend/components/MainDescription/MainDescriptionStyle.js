/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const MainDescriptionContainer = styled.div`
  display: flex;
  margin: 5% auto;
  background-color: #057dcd;
  border-radius: 0.6em;
  width: 100%;
  min-height: 525px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 5%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  color: white;
  height: 100%;
  align-self: center;
  padding: 0% 5%;
  text-align: justify;
  font-size: large;
  font-family: 'Rubik', Arial, sans-serif;
`;
export const ImageContainer = styled.div`
  background-image: url(https://i.ibb.co/N7sNybs/Foto4.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 70em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  @media screen and (max-width: 768px) {
    border-radius: 1em;
    margin: 2% auto;
    width: 75%;
    height: 22em;
  }
`;
