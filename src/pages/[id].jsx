import React from 'react';
import { useRouter } from 'next/router';
import useProfile from '@common/useProfile';
import { BasicCard } from '@eCard';
import { listAllJsonFiles, readJsonFile } from './api/profile/[id]';

export default function ViewPage( { fallbackData } ) {
  const { query: { id } } = useRouter();
  const { profile: profileData } = useProfile( id, fallbackData );
  return (
    <div className="view-container">
      <BasicCard { ...profileData } />
    </div>
  );
}

export async function getStaticPaths() {
  const files = listAllJsonFiles();
  return {
    paths: files.map( ( fileName ) => ( { params: { id: fileName } } ) ),
    fallback: 'blocking',
  };
}

export async function getStaticProps( context ) {
  const { params: { id } } = context;
  const data = readJsonFile( id );
  return data != null ? {
    props: {
      fallbackData: data,
    },
    revalidate: 60 * 5, // 5 minutes
  } : { notFound: true };
}
