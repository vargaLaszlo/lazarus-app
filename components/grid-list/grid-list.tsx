'use client';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/esm/Card';
import Row from 'react-bootstrap/Row';

export type GridListProps = {
  blockData: {
    blockType: string;
    title: string;
    subTitle?: string;
    description: string;
    items?: {
      title: string;
      description: string;
      image: string;
    }[];
    
  };
};

export const GridList = ({blockData}: GridListProps) => {
  const {title, subTitle, description, items} = blockData;
  
  return (
    <Row className='my-5'>
      <Col xs={12}>
        <h1>{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
        <p className='lead'>{description}</p>
      </Col> 
      {
        items && items.map((item, i) => (
          <Col key={Math.random() + i} xs={12} md={6} lg={4} className='my-4'>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};
