/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BorderBox, AnimatedLayer } from './ExperienceStyle';
import { useSpring, animated as a } from 'react-spring';

const BlockExperience = () => {
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
  );
};

export default BlockExperience;
