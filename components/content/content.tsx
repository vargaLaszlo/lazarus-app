'use client';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export type ContentProps = {
  blockData: {
    blockType: string;
    title: string;
    subTitle?: string;
    description: string;
    image?: string;
    imagePosition?: string;
  };
};

export const Content = ({blockData}: ContentProps) => {
  const {title, subTitle, description, image, imagePosition} = blockData;
  
  return (
    <Row className='my-5'>
      {image && imagePosition === 'left' && (
        <Col xs={2} md={3} lg={4}>
          <Image src={image} alt={title} fluid />
        </Col>
      )}  
      <Col xs={10} md={9} lg={8}>
        <h1>{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
        <p className='lead'>{description}</p>
      </Col>
      {image && imagePosition === 'right' && (
        <Col xs={2} md={3} lg={4}>
          <Image src={image} alt={title} fluid />
        </Col>
      )}  
    </Row>
  );
};


