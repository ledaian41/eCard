import React from 'react';

const colorGenerator = ( colorPalette ) => Object.entries( colorPalette )
  .map( ( [ key, value ] ) => `--${ key }: ${ value }` )
  .join( ';' );

export default function ColorStyle( { colorPalette } ) {
  return (
    <style>
      {`:root { ${ colorGenerator( colorPalette ) } }` }
    </style>
  );
}
