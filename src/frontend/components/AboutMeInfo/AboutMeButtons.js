/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import { NeonButton, ButtonContainer, InfoContainer } from './AboutMeInfoStyle';

const AboutMeButtons = () => {
  return (
    <Container>
      <ButtonContainer>
        <NeonButton
          rel='noreferrer'
          target='_blank'
          download='Alejandro Vivanco CV.pdf'
          href='https://dl.dropboxusercontent.com/s/grz36trffqe62s4/CV%20Alejandro%20Vivanco.pdf'
          style={{ textDecoration: 'none' }}>
          <span />
          <span />
          <span />
          <span />
          <InfoContainer>
            Checkout my resume
            <br />
            <i className='fa fa-file-text' />
            <br />
            Download CV
          </InfoContainer>
        </NeonButton>
        <NeonButton
          rel='noreferrer'
          target='_blank'
          href='https://platzi.com/@alejo0o/'
          style={{ textDecoration: 'none' }}>
          <span />
          <span />
          <span />
          <span />
          <InfoContainer>
            Checkout my progress
            <br />
            <i className='fa fa-tasks' />
            <br />
            Platzi
          </InfoContainer>
        </NeonButton>
        <NeonButton
          rel='noreferrer'
          target='_blank'
          href='https://www.coursera.org/user/9a5402d1d502173ba2eca249be406d0f'
          style={{ textDecoration: 'none' }}>
          <span />
          <span />
          <span />
          <span />
          <InfoContainer>
            Checkout my progress
            <br />
            <i className='fa fa-code' />
            <br />
            Coursera
          </InfoContainer>
        </NeonButton>
      </ButtonContainer>
    </Container>
  );
};

export default AboutMeButtons;
