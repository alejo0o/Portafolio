/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import CardHover from '../components/Cards/CardHover';
import { GridContainer, CustomHR } from '../containers/CommonStyles';

const AcademicProjects = () => {
  return (
    <div>
      <Container fluid style={{ padding: '2em 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>ACADEMIC-PROJECTS</h3>
        </div>
        <CustomHR />
        <GridContainer
          style={{ padding: '2em 5%' }}
          rowsNumber='3'
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
          justifyContent='center'>
          <CardHover
            imageTitle='Proyecto-Cine ReactJS'
            description="Front-End for the webpage Proyecto-Cine, it was developed with ReactJS and use's Auth0 for authentication."
            imgAlt='Proyecto Cine Reactjs'
            imgURL='https://i.ibb.co/Lph7XGD/Cine-Front-End.png'
            effectwidth='4'
            subtitle="Academic project for the subject 'new programming techniques'"
            github='https://github.com/alejo0o/ProyectoCine-Reactjs'
            webpage='https://proyecto-cine-reactjs.now.sh/'
          />
          <CardHover
            imageTitle='Proyecto-Cine GraphQL API'
            description='GraphQL API for the webpage Proyecto-Cine, it was developed in NodeJS using express and is a layer between the front-end and back-end.'
            imgAlt=''
            imgURL='https://i.ibb.co/ZBbv9JX/GRAPHQL.png'
            effectwidth='2'
            subtitle="Academic project for the subject 'new programming techniques'"
            github='https://github.com/alejo0o/deployZeit'
            webpage='https://deploy-zeit.now.sh/api'
          />
          <CardHover
            imageTitle='Proyecto-Cine REST API'
            description='REST API for the webpage Proyecto-Cine, it was developed in Laravel and it uses a PostgreSQL database for storage.'
            imgAlt=''
            imgURL='https://i.ibb.co/kcbrLRY/REST.png'
            effectwidth='1.3'
            subtitle="Academic project for the subject 'new programming techniques'"
            github='https://github.com/alejo0o/ProyectoCine'
            webpage='https://proyectocinegithub.herokuapp.com/api/peliculas/44'
          />
          <CardHover
            imageTitle='Aba-Systems'
            description="Desktop application developed in C#, it's main purpose is to manage subjects for every teacher who is registered and generate informative PDF's."
            imgAlt=''
            imgURL='https://i.ibb.co/C89T3Jk/Aba.png'
            effectwidth='4'
            subtitle="Academic project for the subject 'programming languages'"
            github='https://github.com/alejo0o/Sistema-de-Profesores'
            webpage=''
          />
          <CardHover
            imageTitle='Proyecto-Prisión'
            description="Webpage developed in Java, it's main purpose is to manage administrative functions inside a prison, it uses PrimeFaces and Oracle database."
            imgAlt='Proyecto Cine Reactjs'
            imgURL='https://i.ibb.co/HCDM3Vz/Prision.png'
            effectwidth='2'
            subtitle="Academic project for the subject 'software engineering'"
            github='https://github.com/alejo0o/SistemaPrision'
            webpage=''
          />
          <CardHover
            imageTitle='TASBP Front-end'
            description='Front-End for the webpage TASBP answers, it was developed with ReactJS using semantic-ui.'
            imgAlt=''
            imgURL='https://i.ibb.co/tLxgLbw/Proyecto-TASBP.png'
            effectwidth='1.3'
            subtitle="Academic project for the subject 'advanced programming'"
            github='https://github.com/alejo0o/PAFrontCRA'
            webpage='https://yahoo-frontend.vercel.app'
          />
          <CardHover
            imageTitle='TASBP REST API'
            description='REST API for the webpage TASBP answers, it was developed using ASP.Net core and it uses Microsoft SQL Server as a database for storage.'
            imgAlt=''
            imgURL='https://i.ibb.co/Tmm9mNm/Rest-Yahoo.png'
            effectwidth='4'
            subtitle="Academic project for the subject 'advanced programming'"
            github='https://github.com/alejo0o/YahooBackEnd'
            webpage='https://proyectoprograavanzada.azurewebsites.net/api/pregunta'
          />
        </GridContainer>
      </Container>
    </div>
  );
};

export default AcademicProjects;
