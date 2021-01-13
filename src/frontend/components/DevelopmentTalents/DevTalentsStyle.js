// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const DevelopTMain = styled.div`
  background-color: #1c6cae;
  margin: 3%;
  border-radius: 1.5em;
  display: flex;
  justify-content: space-between;
  padding: 3em;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.8em;
  }
`;
export const VerticalLine = styled.div`
  border-left: thick solid #37beb09d;
  margin: 1.2%;
  border-radius: 1em;

  @media screen and (max-width: 768px) {
    border-bottom: thick solid #37beb09d;
    margin: 1.2%;
    border-radius: 1em;
  }
  @media screen and (max-width: 450px) {
    border-bottom: thick solid #37beb09d;
    margin: 1.2%;
    border-radius: 1em;
  }
`;
