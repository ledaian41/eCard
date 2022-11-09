import React from 'react';
import { BasicCard, GradientCard, PillarCard } from '@eCard';
import { readJsonFile } from './api/profile/[id]';

export default function Home( { sampleData } ) {
  return (
    <div className="template-grid-layout">
      <BasicCard { ...sampleData } />
      <GradientCard { ...sampleData } />
      <PillarCard { ...sampleData } />
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
