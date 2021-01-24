/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import {
  ImageContainer,
  TextContainer,
  MainDescriptionContainer,
} from './MainDescriptionStyle';

const MainDescription = () => {
  return (
    <Container fluid style={{ padding: '0 5%' }}>
      <MainDescriptionContainer>
        <TextContainer>
          <h2
            style={{
              textAlign: 'start',

              fontWeight: '900',
            }}>
            Hi, I&apos;m Alejandro Vivanco
          </h2>
          <br />
          <p>
            I&apos;m a Junior developer with knowledge of applied technologies
            for Back-End development, Front-End development and Devops. Actually
            I&apos;m studying Systems Engineering and Computing at the
            Pontifical Catholic University of Ecuador.
            <br />
            <br />
            This website show&apos;s evidence of my projects and progress in my
            career.😀
            <br />
          </p>
          <h2 style={{ fontFamily: 'Brush Script MT, cursive' }}>-Alejo</h2>
        </TextContainer>
        <ImageContainer />
      </MainDescriptionContainer>
    </Container>
  );
};
//&apos;
export default MainDescription;
