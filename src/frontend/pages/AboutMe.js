import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMeInfo from '../components/AboutMeInfo/AboutMeInfo';

const AboutMe = () => {
  return (
    <div>
      <Helmet>
        <title>About Me | Alejandro Vivanco</title>
        <link rel='icon' href='https://i.ibb.co/g4hYLtW/image.png' />
      </Helmet>
      <AboutMeInfo />
    </div>
  );
};

export default AboutMe;
