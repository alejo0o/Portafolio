/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GridContainer, CustomHR } from '../../containers/CommonStyles';
import { BorderBox, AnimatedLayer } from './ExperienceStyle';
import { useSpring, animated as a } from 'react-spring';
import Card from './CardExperiencie';

const Experience = () => {
  const flippedCard = (verification) => {
    const { transform, opacity } = useSpring({
      opacity: verification ? 1 : 0,
      transform: `perspective(600px) rotateX(${verification ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    });
    return [transform, opacity];
  };
  const [flipped, setflipped] = useState(false);
  const [flipped2, setflipped2] = useState(false);

  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h3>EXPERIENCE</h3>
      </div>
      <CustomHR />
      <GridContainer
        rowsNumber='1'
        rowminwidth='auto'
        rowmaxwidth='200px'
        columnsNumber='2'
        columnmaxheight='300px'
        columnminheight='auto'
        gap='20px'
        responsiverowsNumber='2'
        responsirowminwidth='auto'
        responsiverowmaxwidth='150px'
        resposivecolumnnumber='1'
        responsivecolumnminheight='auto'
        responsivecolumnmaxheight='250px'
        responsivegap='25px'
        responsiveWindowSize='728px'
        justifyContent='center'>
        <div onClick={() => setflipped(!flipped)}>
          <AnimatedLayer
            style={{
              opacity: flippedCard(flipped)[1].interpolate((o) => 1 - o),
              transform: flippedCard(flipped)[0],
            }}>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip> Click for more Info!</Tooltip>}>
              <img
                width='100%'
                height='100%'
                src='https://i.ibb.co/FWKSZpS/experiencia-digevo.jpg'
                alt=''
              />
            </OverlayTrigger>
          </AnimatedLayer>
          <AnimatedLayer
            style={{
              opacity: flippedCard(flipped)[1],
              transform: flippedCard(flipped)[0].interpolate(
                (t) => `${t} rotateX(180deg)`
              ),
            }}>
            hola
          </AnimatedLayer>
        </div>
        <div onClick={() => setflipped2(!flipped2)}>
          <AnimatedLayer
            style={{
              opacity: flippedCard(flipped2)[1].interpolate((o) => 1 - o),
              transform: flippedCard(flipped2)[0],
            }}>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip> Click for more Info!</Tooltip>}>
              <img
                width='100%'
                height='100%'
                src='https://i.ibb.co/StX9ryf/puce-exp.jpg'
                alt=''
              />
            </OverlayTrigger>
          </AnimatedLayer>
          <AnimatedLayer
            style={{
              opacity: flippedCard(flipped2)[1],
              transform: flippedCard(flipped2)[0].interpolate(
                (t) => `${t} rotateX(180deg)`
              ),
            }}>
            hola
          </AnimatedLayer>
        </div>
      </GridContainer>
    </Container>
  );
};

export default Experience;
