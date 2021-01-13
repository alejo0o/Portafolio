/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import importNames from './SkillNames';
import { GridContainer, CustomHR } from '../../containers/CommonStyles';

const SkillSet = () => {
  return (
    <Container
      fluid
      style={{
        padding: '3em 0 2em 0',
        background: '#057dcd',
        margin: '0 0 4% 0',
      }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h3>SKILLSET</h3>
      </div>
      <CustomHR />
      <GridContainer
        style={{ padding: '2em 5%' }}
        rowsNumber='4'
        rowminwidth='120px'
        rowmaxwidth='140px'
        columnsNumber='4'
        columnmaxheight='140px'
        columnminheight='120px'
        gap='29px'
        responsiverowsNumber='3'
        responsirowminwidth='80px'
        responsiverowmaxwidth='120px'
        resposivecolumnnumber='3'
        responsivecolumnminheight='80px'
        responsivecolumnmaxheight='120px'
        responsivegap='29px'
        responsiveWindowSize='728px'
        justifyContent='space-between'>
        {importNames.map((skills) => (
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip>{skills[1]}</Tooltip>}
            key={skills[0]}>
            <img width='100%' src={skills[0]} alt={skills[2]} />
          </OverlayTrigger>
        ))}
      </GridContainer>
    </Container>
  );
};

export default SkillSet;
