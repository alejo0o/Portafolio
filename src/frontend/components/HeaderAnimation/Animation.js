/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import { CircleDiv, DivHearthBeat, SlideInEffect } from './AnimationContainers';
import {
  Computer,
  ImageEffect,
  Img,
  Name,
  Profesion,
  BgVideo,
  PageHeader,
} from './AnimationStyle';
import computer from '../../assets/img/header/computer.png';
import { CustomHR } from '../../containers/CommonStyles';
//SVG images
import php from '../../assets/img/header/php.svg';
import javascript from '../../assets/img/header/javascript.svg';
import python from '../../assets/img/header/python.svg';
import csharp from '../../assets/img/header/csharp.svg';
//Video
import bgvideo from '../../assets/img/header/bgvideo.mp4';

const Animation = () => {
  return (
    <PageHeader>
      <div className='overlay' />
      <BgVideo playsInline autoPlay muted loop type='video/mp4'>
        <source src={bgvideo} />
      </BgVideo>
      <Container
        fluid
        style={{
          position: 'relative',
          zIndex: '2',
          marginBottom: '2em',
        }}>
        <SlideInEffect style={{ width: '100%' }}>
          <DivHearthBeat>
            <ImageEffect src={php} alt='' />
            <Img src={javascript} alt='' />
          </DivHearthBeat>
          <CircleDiv>
            <Computer src={computer} />
          </CircleDiv>
          <DivHearthBeat flexStart>
            <Img src={python} alt='' />
            <ImageEffect right src={csharp} alt='' />
          </DivHearthBeat>
        </SlideInEffect>
        <Container fluid style={{ textAlign: 'center' }}>
          <Name>Alejandro Vivanco</Name>
        </Container>
        <CustomHR />
        <Container fluid style={{ textAlign: 'center' }}>
          <Profesion>Software Developer</Profesion>
        </Container>
      </Container>
    </PageHeader>
  );
};

export default Animation;
