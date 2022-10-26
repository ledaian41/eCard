import React from 'react';
import { BasicCard, GradientCard } from '@eCard';
import styles from '../styles/Home.module.css';
import sample from '../features/eCard/sample.json';

export default function Home() {
  return (
    <div className={ styles.templateLayout }>
      <BasicCard { ...sample } />
      <GradientCard { ...sample } />
    </div>
  );
}
