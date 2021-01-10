/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GridContainer } from './SkillSetStyle';
import { CustomHR } from '../Cards/CardEffect';
import importNames from './SkillNames';

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
      <GridContainer>
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
