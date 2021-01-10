/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const SingleCard = ({ image, title, description, link1, link2 }) => {
  return (
    <div>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={image} />
          <hr />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div style={{ display: 'flex' }}>
            <a className='btn btn-primary' href={link1}>
              Github
            </a>
            <a className='btn btn-primary' href={link2}>
              Webpage
            </a>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SingleCard;
