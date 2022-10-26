import useSWR from 'swr';

const fetcher = ( url ) => fetch( url ).then( ( res ) => res.data );

const useProfile = ( id, fallbackData ) => {
  const { data } = useSWR( `/api/profile/${ id }`, fetcher, { fallbackData, refreshInterval: 30000, suspense: true } );
  return {
    profile: data,
  };
};

export default useProfile;
