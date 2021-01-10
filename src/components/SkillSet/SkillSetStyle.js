/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 2em 5%;
  display: grid;
  grid-template: repeat(4, minmax(120px, 140px)) / repeat(
      4,
      minmax(120px, 140px)
    );
  justify-content: space-between;
  gap: 29px;
  @media screen and (max-width: 768px) {
    grid-template: repeat(3, minmax(80px, 110px)) / repeat(
        3,
        minmax(80px, 110px)
      );
    justify-content: center;
    gap 20px;
  }
`;
export const Img = styled.div``;
