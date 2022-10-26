import path from 'path';
import { promises as fs } from 'fs';

export const readJsonFile = async ( fileName ) => {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join( process.cwd(), 'json' );
  // Read the json data file data.json
  const jsonData = await fs.readFile( `${ jsonDirectory }/${ fileName }.json`, 'utf8' );
  return JSON.parse( jsonData );
};

export default async function handler( req, res ) {
  const { query: { id } } = req;
  try {
    const fileContents = await readJsonFile( id );
    res.status( 200 ).json( fileContents );
  } catch ( e ) {
    res.status( 404 ).json( { message: 'Not found' } );
  }
}
