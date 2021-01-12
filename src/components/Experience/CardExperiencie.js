/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Card } from 'react-bootstrap';

const CardExperience = ({ color, colorText, header, title, information }) => {
  return (
    <Card bg={color} text={colorText} className='mb-2'>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{information}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardExperience;
