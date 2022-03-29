import sharp from 'sharp';
import { resolve } from 'path';
import { uploadedImages, processedImages } from './get_metadata'

export async function resizeUploadedImage(filename: string, width: string, height: string): Promise<void> {
  const imageSrc = resolve(uploadedImages, filename);
  const imageDist = resolve(processedImages, filename);

  await sharp(imageSrc).resize({
    width: parseInt(width),
    height: parseInt(height)
  }).toFile(imageDist);
}