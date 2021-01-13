/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import { GridContainer, CustomHR } from '../../containers/CommonStyles';
import BlockExperience from './BlockExperience';

const Experience = () => {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h3>EXPERIENCE</h3>
      </div>
      <CustomHR className='mb-5' />
      <GridContainer
        rowsNumber='1'
        rowminwidth='auto'
        rowmaxwidth='300px'
        columnsNumber='2'
        columnmaxheight='415px'
        columnminheight='auto'
        gap='20px'
        responsiverowsNumber='2'
        responsirowminwidth='200px'
        responsiverowmaxwidth='auto'
        resposivecolumnnumber='1'
        responsivecolumnminheight='auto'
        responsivecolumnmaxheight='415px'
        responsivegap='50px'
        responsiveWindowSize='768px'
        justifyContent='center'>
        <BlockExperience
          urlImage='https://i.ibb.co/FWKSZpS/experiencia-digevo.jpg'
          altImage=''
          tooltipText='Click for more Info!'
          color='white'
          colorText='black'
          header='DIGEVO'
          title='Front-End-Developer'
          information="Worked as an intern developing a webpage for Digevo's demos related to facial recognition.(2-months)"
        />
        <BlockExperience
          urlImage='https://i.ibb.co/StX9ryf/puce-exp.jpg'
          altImage=''
          tooltipText='Click for more Info!'
          color='#057dcd'
          colorText='white'
          header='Pontifical Catholic University of Ecuador'
          title='Intern'
          information='Working as an intern at the Information and Communication Technologies Laboratory. (5-months)'
        />
      </GridContainer>
    </Container>
  );
};

export default Experience;
