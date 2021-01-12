/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template:
    repeat(
      ${(props) => props.rowsNumber},
      minmax(${(props) => props.rowminwidth}, ${(props) => props.rowmaxwidth})
    )
    / repeat(
      ${(props) => props.columnsNumber},
      minmax(
        ${(props) => props.columnminheight},
        ${(props) => props.columnmaxheight}
      )
    );
  justify-content: space-between;
  gap: ${(props) => props.gap};
  @media screen and (max-width: ${(props) => props.responsiveWindowSize}) {
    grid-template:
      repeat(
        ${(props) => props.responsiverowsNumber},
        minmax(
          ${(props) => props.responsirowminwidth},
          ${(props) => props.responsiverowmaxwidth}
        )
      )
      / repeat(
        ${(props) => props.resposivecolumnnumber},
        minmax(
          ${(props) => props.responsivecolumnminheight},
          ${(props) => props.responsivecolumnmaxheight}
        )
      );
    justify-content: ${(props) => props.justifyContent};
    gap: ${(props) => props.responsivegap};
  }
`;
export const CustomHR = styled.hr`
  border: 0;
  height: 2px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #31bcd8, #f0f0f0);
`;
