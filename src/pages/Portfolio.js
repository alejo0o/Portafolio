/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import CardHover from '../components/Cards/CardHover';
import { GridContainer, CustomHR } from '../containers/CommonStyles';
import Experience from '../components/Experience/Experience';

const Portfolio = () => {
  return (
    <Container fluid style={{ padding: '2em 0' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>PORTFOLIO</h3>
      </div>
      <CustomHR />
      <GridContainer
        rowsNumber='2'
        rowminwidth='200px'
        rowmaxwidth='300px'
        columnsNumber='3'
        columnmaxheight='415px'
        columnminheight='300px'
        gap='29px'
        responsiverowsNumber='1'
        responsirowminwidth='auto'
        responsiverowmaxwidth='auto'
        resposivecolumnnumber='1'
        responsivecolumnminheight='auto'
        responsivecolumnmaxheight='800px'
        responsivegap='50px'
        responsiveWindowSize='1024px'
        justifyContent='center'
        style={{ marginBottom: '3em', padding: '2em 5%' }}>
        <CardHover
          imageTitle='Digevo Demos'
          description="Front-end for Digevo's demos related to facial recognition, it was developed using HTML5 CSS3 Bootstrap Reactjs and JavaScript."
          imgAlt='Digevo Demos'
          imgURL='https://i.ibb.co/bF7G35m/Digevo.png'
          effectwidth='4'
          subtitle="Webpage for Digevo's company demos"
          github=''
          webpage='https://demos-digevo.vercel.app'
        />
        <CardHover
          imageTitle='E-sports Front-end'
          description="Front-End for the webpage E-sports-ecu, it was developed with ReactJS and use's Auth0 for authentication."
          imgAlt='E-Sports-Ecu'
          imgURL='https://i.ibb.co/2h9L3FH/E-sports.png'
          effectwidth='2'
          subtitle='Webpage for students of Pontifical Catholic University of Ecuador related to E-Sports.'
          github='https://github.com/alejo0o/E-sportsFrontend'
          webpage='https://e-sports-frontend.vercel.app'
        />
        <CardHover
          imageTitle='E-sports backend API'
          description='REST API for the webpage E-sports-ecu, it was developed in Laravel and it uses a PostgreSQL database for storage.'
          imgAlt=''
          imgURL='https://i.ibb.co/S63MjDr/E-sports-api.png'
          effectwidth='1.3'
          subtitle='Webpage for students of Pontifical Catholic University of Ecuador related to E-Sports.'
          github='https://github.com/alejo0o/ProyectoEsports'
          webpage='https://e-sports1.herokuapp.com/api/noticias'
        />
        <CardHover
          imageTitle='UTPL News'
          description='Webpage developed using Webnode for a student of UTPL with reports, news and articles.'
          imgAlt='UTPL News'
          imgURL='https://i.ibb.co/nMBxGxM/Noticias-UTPL.png'
          effectwidth='4'
          subtitle='Webpage developed using WebNode with reports, news and articles'
          github=''
          webpage='https://noticias-utpl3.webnode.es'
        />
      </GridContainer>

      <Experience />
    </Container>
  );
};

export default Portfolio;
