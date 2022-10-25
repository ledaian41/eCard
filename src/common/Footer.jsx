import React from 'react';

export default function Footer( { style, className } ) {
  return (
    <div style={ { textAlign: 'center', fontSize: '0.9rem', fontWeight: 300, ...style } } className={ className }>
      <strong>&copy;&nbsp;</strong>
      <span>{new Date().getFullYear()}</span>
      <span>&nbsp;</span>
      <span>Designed & Built by An Le</span>
      <span>&nbsp;&#128516;</span>
    </div>
  );
}
