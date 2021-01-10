import React from 'react';
import MainDescription from '../components/MainDescription/MainDescription';
import DevelopmentTalents from '../components/DevelopmentTalents/DevTalents';
import SkillSet from '../components/SkillSet/SkillSet';

const MainPage = () => {
  return (
    <div>
      <MainDescription />
      <DevelopmentTalents />
      <SkillSet />
    </div>
  );
};

export default MainPage;
