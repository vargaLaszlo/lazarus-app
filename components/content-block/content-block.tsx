'use client';
import React from 'react';
import { Lead } from '../lead/lead';
import { IContentBoxFields } from '@/types/generated/contentful';

export type ContentBlockProps = {
  blockData: IContentBoxFields;
};

export const ContentBlock = ({blockData}: ContentBlockProps) => {
  console.log('blockData', blockData);
  console.log('type', blockData.contentType);

  const { contentType } = blockData;

  switch (contentType) {
    case 'lead':
      return <Lead blockData={blockData} />;
    case 'list':
      return <>2</>;
    default:
      return <>0</>;
  }
};


