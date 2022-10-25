import React from 'react';
import { BasicCard, GradientCard } from '../features/eCard';
import sample from '../features/eCard/sample.json';

export default function Home() {
  return (
    <div>
      <GradientCard { ...sample } />
    </div>
  );
}
