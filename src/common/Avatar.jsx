import React from 'react';
import Image from 'next/image';

export default function Avatar( { src, className, alt } ) {
  return (
    <Image
      className={ className }
      src={ src }
      placeholder="blur"
      blurDataURL="/images/placeholder.png"
      width={ 160 }
      height={ 160 }
      alt={ alt }
      priority
      style={ { borderRadius: 999, width: 160, height: 'auto' } }
    />
  );
}
