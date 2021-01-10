/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import MainPage from '../pages/MainPage';
import AcademicProjects from '../pages/AcademicProjects';
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/academic-projects' component={AcademicProjects} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/about-me' component={AboutMe} />
    </Switch>
  );
};

export default Router;
