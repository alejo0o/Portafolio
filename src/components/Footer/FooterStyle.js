// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const FooterMain = styled.footer`
  background-color: #002549;
  font-family: 'Rubik', Arial, sans-serif;
  color: white;
`;
export const FooterMainContainer = styled.div`
  max-width: 115em;
  margin: auto;
`;
export const FooterFirstContainer = styled.div`
  padding: 1%;
  margin: 0 auto;
  display: flex;
  p {
    font-weight: bolder;
    font-size: 1.4em;
    padding-top: 3%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.6em;
  }
`;
export const HorizontalLine = styled.div`
  border-bottom: thick solid #37beb0;
  border-radius: 1em;
`;

export const FooterImg = styled.img`
  border-radius: 5em;
  margin: 1.2%;
`;
export const SecondContainer = styled.div`
  padding: 1% 32%;
  @media screen and (max-width: 450px) {
    font-size: 0.6em;
  }
`;
export const FooterSecond = styled.div`
  background-color: #37beb0;
  border-radius: 1em;
  display: flex;
  color: rgb(27, 37, 59);
  p {
    font-weight: bolder;
    font-size: 1.5em;
    padding: 4% 5% 0% 5%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;
export const ThirdContainer = styled.div`
  background-color: black;
  display: flex;
  @media screen and (max-width: 450px) {
    display: block;
  }
`;

export const IconImg = styled.img`
  width: 1.2em;
  margin-top: 25%;
`;
