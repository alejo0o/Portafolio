import MainPage from '../pages/MainPage';
import AcademicProjects from '../pages/AcademicProjects';
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';

const routes = [
  {
    exact: true,
    path: '/',
    component: MainPage,
  },
  {
    exact: true,
    path: '/academic-projects',
    component: AcademicProjects,
  },
  {
    exact: true,
    path: '/portfolio',
    component: Portfolio,
  },
  {
    exact: true,
    path: '/about-me',
    component: AboutMe,
  },
];

export default routes;
