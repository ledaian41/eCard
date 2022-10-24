import React from 'react';
import { BasicCard } from '../features/eCard';
import sample from '../features/eCard/sample.json';


export default function Home() {
  return (
    <div>
      <BasicCard { ...sample } />
    </div>
  );
}
