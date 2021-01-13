/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { animated } from 'react-spring';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 7px solid;
  border-image-source: linear-gradient(45deg, #68bbe3, #055c9d);
  border-image-slice: 1;
`;

export const AnimatedLayer = styled(animated.div)`
  position: absolute;
  cursor: pointer;
  will-change: transform, opacity;
`;
