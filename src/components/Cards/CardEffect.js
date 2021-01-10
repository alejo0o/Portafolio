/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { animated } from 'react-spring';

export const ImageContainer = styled(animated.div)`
  position: relative;
  width: 400px;
  cursor: pointer;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  //background: rgba(96, 163, 217, 0.6);
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s;
  border: solid 0px;
  transition: border 0.8s;
  backdrop-filter: blur(1px);
  &:hover {
    opacity: 1;
    border: solid 16px;
    border-image-source: linear-gradient(45deg, #75e6da, #043bb1);
    border-image-slice: 1;
  }
  i {
    transform: translateY(-80px);
    transition: transform 0.5s;
  }
  &:hover i {
    transform: translateY(0px);
  }
  p {
    transform: translateY(80px);
    transition: transform 0.5s;
  }
  &:hover p {
    transform: translateY(0px);
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const ImageTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const ImageDescription = styled.p`
  font-size: 1.4em;
  margin-top: 0.25em;
`;

export const CustomHR = styled.hr`
  border: 0;
  height: 2px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
`;
//Icon search
export const SearchIcon = styled.i`
  font-size: 4em;
`;
//Styles for grid
export const GridContainer = styled.div`
  padding: 2em 5%;
  display: grid;

  grid-template: repeat(${(props) => props.rowsNumber}, minmax(200px, 300px)) / repeat(
      3,
      minmax(300px, 415px)
    );
  justify-content: space-between;
  gap: 29px;
  @media screen and (max-width: 768px) {
    grid-template: repeat(1, minmax(200px, 300px)) / repeat(
        1,
        minmax(300px, 400px)
      );
    justify-content: center;
  }
`;
