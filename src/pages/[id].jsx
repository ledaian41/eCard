import React from 'react';
import { useRouter } from 'next/router';
import useProfile from '@common/useProfile';
import { BasicCard } from '@eCard';
import { readJsonFile } from './api/profile/[id]';

export default function ViewPage( { fallbackData } ) {
  const { query: { id } } = useRouter();
  const { profile: profileData } = useProfile( id, fallbackData );
  return <BasicCard { ...profileData } />;
}

export async function getStaticPaths() {
  return {
    paths: [ { params: { id: 'sample' } } ],
    fallback: false,
  };
}

export async function getStaticProps( context ) {
  const { params: { id } } = context;
  return {
    props: {
      fallbackData: await readJsonFile( id ),
    },
  };
}
