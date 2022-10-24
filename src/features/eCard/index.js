import dynamic from 'next/dynamic';

// eslint-disable-next-line import/prefer-default-export
export const BasicCard = dynamic( () => import( './templates/basicCard/BasicCard' ) );
