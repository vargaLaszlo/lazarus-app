'use client';
import { IContentBoxFields } from '@/types/generated/contentful';
import React from 'react';
import { Card } from 'react-bootstrap';

export type LeadProps = {
  blockData: IContentBoxFields;
};

export const Lead = ({blockData}: LeadProps) => {
  const {title, subtitle, description} = blockData;

  return (
    <Card className='my-4'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        {description && <Card.Text className='lead'>!!!</Card.Text>}
      </Card.Body>
    </Card>
  );
};


