/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container } from 'react-bootstrap';
import { TalentMain, TalantImgContainer, TalentImage } from './TalentStyle';

const Talent = ({ image, title, description, tools, languages }) => {
  return (
    <Container fluid>
      <TalentMain>
        <TalantImgContainer>
          <TalentImage alt='' src={image} />
        </TalantImgContainer>
        <h4>{title}</h4>
        <p>{description}</p>
        <p style={{ color: '#56c9ff' }}>{tools}</p>
        <p>{languages}</p>
      </TalentMain>
    </Container>
  );
};

export default Talent;
