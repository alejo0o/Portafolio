/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import { MainContainer, ImageBorder, TextContainer } from './AboutMeInfoStyle';
import Buttons from './AboutMeButtons';

const AboutMeInfo = () => {
  return (
    <Container fluid style={{ padding: '5% 8%' }}>
      <MainContainer className='mb-5'>
        <TextContainer>
          <h1>About Me</h1>
          <br />
          <p>
            I&apos;m a student of systems engineering at the Pontifical Catholic
            University of Ecuador, I&apos;m also studying web and mobile
            development at Platzi and Coursera. Even though my main strength is
            back-end development I&apos;m fascinated with front-end development
            and devops, so I&apos;m always learning more about this fields.
            <br />
            <br />
            I&apos;m 22 years old and my hobbies are excercise, soccer and
            videogames. I&apos;m a person who enjoys learning new things every
            day so I&apos;m eager to show my abilities developing awesome things
            for people.
          </p>
        </TextContainer>
        <ImageBorder className='mt-4'>
          <img
            width='100%'
            height='100%'
            src='https://i.ibb.co/FswB0sw/imagen-about-me.jpg'
            alt=''
          />
        </ImageBorder>
      </MainContainer>
      <Buttons />
    </Container>
  );
};

export default AboutMeInfo;
