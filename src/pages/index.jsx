import React from 'react';
import { BasicCard, GradientCard } from '@eCard';
import { readJsonFile } from './api/profile/[id]';

export default function Home( { sampleData } ) {
  return (
    <div className="template-grid-layout">
      <BasicCard { ...sampleData } />
      <GradientCard { ...sampleData } />
    </div>
  );
}

export async function getStaticProps() {
  const data = readJsonFile( 'sample' );
  return {
    props: {
      sampleData: data,
    },
  };
}
