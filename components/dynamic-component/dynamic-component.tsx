'use client';
import dynamic from 'next/dynamic';

export type DynamicComponentProps = {
  blockType: 'lead' | 'content';
  blockData: {
    blockType?: 'lead' | 'content';
    title?: string;
    subtitle?: string;
    description?: string;
  };
};

const ReturnComponent = dynamic(() => import(`@/components/lead/lead`), {
  ssr: false,
});

export const DynamicComponent = ({ blockData }: DynamicComponentProps) => {
  

  return (
    <ReturnComponent blockData={blockData} />
  );
};