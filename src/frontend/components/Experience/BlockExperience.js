/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AnimatedLayer, Image } from './ExperienceStyle';
import { useSpring } from 'react-spring';
import Card from './CardExperiencie';

const BlockExperience = ({
  urlImage,
  altImage,
  tooltipText,
  color,
  colorText,
  header,
  title,
  information,
}) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <OverlayTrigger placement='top' overlay={<Tooltip>{tooltipText}</Tooltip>}>
      <div
        onClick={() => set((state) => !state)}
        style={{
          position: 'relative',
        }}>
        <AnimatedLayer
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
          <Image src={urlImage} alt={altImage} />
        </AnimatedLayer>
        <AnimatedLayer
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}>
          <Card
            color={color}
            colorText={colorText}
            header={header}
            title={title}
            information={information}
          />
        </AnimatedLayer>
      </div>
    </OverlayTrigger>
  );
};

export default BlockExperience;
