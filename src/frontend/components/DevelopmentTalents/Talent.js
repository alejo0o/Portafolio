import React from 'react';
import { TalentMain, TalantImgContainer, TalentImage } from './TalentStyle';

const Talent = ({ image, title, description, tools, languages }) => {
  return (
    <TalentMain>
      <TalantImgContainer>
        <TalentImage alt='' src={image} />
      </TalantImgContainer>
      <h4>{title}</h4>
      <p>{description}</p>
      <p style={{ color: '#56c9ff' }}>{tools}</p>
      <p>{languages}</p>
    </TalentMain>
  );
};

export default Talent;
