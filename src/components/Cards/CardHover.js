/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
  ImageOverlay,
  ImageContainer,
  Img,
  ImageDescription,
  SearchIcon,
} from './CardEffect';
import DescriptionModal from '../ModalDescription/ProjectDescription';
//Effects from react-spring

const CardHover = ({
  imageTitle,
  imgURL,
  imgAlt,
  effectwidth,
  description,
  subtitle,
  github,
  webpage,
}) => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / effectwidth) / 20, //400,1600,2400
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 650, friction: 40 },
  }));
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <ImageContainer
        style={{
          width: '100%',
          transform: props.xys.interpolate(trans),
          border: '5px outset',
          boxShadow: '5px 10px 8px #888888',
        }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        onClick={() => setIsOpen(true)}>
        <Img
          alt={imgAlt}
          src={imgURL}
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
        <ImageOverlay>
          <SearchIcon className='fa fa-search-plus' aria-hidden='true' />
          <br />
          <ImageDescription>{imageTitle}</ImageDescription>
        </ImageOverlay>
      </ImageContainer>
      <DescriptionModal
        show={modalIsOpen}
        onHide={() => setIsOpen(false)}
        imageALT={imgAlt}
        description={description}
        title={imageTitle}
        imageSRC={imgURL}
        github={github}
        webpage={webpage}
        subtitle={subtitle}
      />
    </>
  );
};

export default CardHover;
