import React from 'react';
import { Helmet } from 'react-helmet';
import MainDescription from '../components/MainDescription/MainDescription';
import DevelopmentTalents from '../components/DevelopmentTalents/DevTalents';
import SkillSet from '../components/SkillSet/SkillSet';

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Alejandro Vivanco</title>
        <link rel='icon' href='https://i.ibb.co/g4hYLtW/image.png' />
      </Helmet>
      <div />
      <div>
        <MainDescription />
      </div>
      <div>
        <DevelopmentTalents />
      </div>
      <div>
        <SkillSet />
      </div>
    </div>
  );
};

export default MainPage;
