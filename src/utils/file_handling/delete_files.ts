
import { readdirSync, rmSync } from 'fs';
import { resolve } from 'path';


export function emptyDirectory() {

  const uploadedImages: string = resolve(__dirname, '..', '..', '..', 'images', 'uploaded_images');
  const processedImages: string = resolve(__dirname, '..', '..', '..', 'images', 'processed_images');

  readdirSync(uploadedImages).forEach(file => rmSync(`${uploadedImages}/${file}`));
  readdirSync(processedImages).forEach(file => rmSync(`${processedImages}/${file}`));

}