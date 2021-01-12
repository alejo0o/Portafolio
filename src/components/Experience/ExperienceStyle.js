/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { animated } from 'react-spring';

export const BorderBox = styled(animated.div)`
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 50ch;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;
`;
export const AnimatedLayer = styled(animated.div)`
  position: absolute;
  min-height: auto;
  max-height: 200px;
  min-width: auto;
  max-width: 300px;
  background: red;
  cursor: pointer;
  will-change: transform, opacity;
`;
