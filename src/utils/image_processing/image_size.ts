import sizeOf from 'image-size';
import { ISizeCalculationResult } from 'image-size/dist/types/interface';

export function getDimensions(filepath: string) {
  const dimensions: ISizeCalculationResult = sizeOf(filepath);
  return dimensions;
}


