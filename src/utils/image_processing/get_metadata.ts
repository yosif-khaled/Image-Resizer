import sharp, { Metadata } from "sharp";
import { resolve } from 'path';

export const uploadedImages: string = resolve(__dirname, '..', '..', '..', 'images', 'uploaded_images');
export const processedImages: string = resolve(__dirname, '..', '..', '..', 'images', 'processed_images');

export type Dimensions = {
  width: number,
  height: number
};

export async function getMetadata(filename: string, filepath: string) {
  const targetImage: string = resolve(filepath, filename);
  // replace string in the following function wih filepath + filename
  const metadata: Metadata = await sharp(targetImage).metadata();
  // let width: number;
  // let height: number;
  // if(metadata.width != null && metadata.height != null){
  //   width = metadata.width;
  //   height= metadata.height;
  // } else {
  //   width = 0;
  //   height = 0;
  // }
  // let dimensions: Dimensions = {'width': width, 'height': height };
  // return dimensions;
  console.log(metadata);
}