import path from 'path';
import fs from 'fs';

export const listAllJsonFiles = () => {
  const jsonDirectory = path.join( process.cwd(), 'json' );
  return fs.readdirSync( jsonDirectory )
    .filter( ( file ) => path.extname( file ) === '.json' )
    .map( ( fileName ) => path.parse( fileName ).name );
};

export const readJsonFile = ( fileName ) => {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join( process.cwd(), 'json' );
  // Read the json data file data.json
  try {
    const jsonData = fs.readFileSync( `${ jsonDirectory }/${ fileName }.json`, 'utf8' );
    return JSON.parse( jsonData );
  } catch ( e ) {
    return null;
  }
};

export default function handler( req, res ) {
  const { query: { id } } = req;
  const fileContents = readJsonFile( id );
  if ( fileContents != null ) {
    res.status( 200 ).json( fileContents );
  } else {
    res.status( 404 ).json( { message: 'Not found' } );
  }
}
