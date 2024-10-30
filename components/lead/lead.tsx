'use client';
import React from 'react';
import { Card } from 'react-bootstrap';

export type LeadProps = {
  blockData: {
    blockType: string;
    title: string;
    subtitle?: string;
    description: string;
  };
};

export const Lead = ({blockData}: LeadProps) => {
  const {title, subtitle, description} = blockData;

  return (
    <Card className='my-4'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        <Card.Text className='lead'>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};


