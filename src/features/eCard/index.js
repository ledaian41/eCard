import dynamic from 'next/dynamic';

export const BasicCard = dynamic( () => import( './templates/BasicCard/BasicCard' ), { suspense: true } );

export const GradientCard = dynamic( () => import( './templates/GradientCard/GradientCard' ), { suspense: true } );
