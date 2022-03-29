import express, { Request, Response } from 'express';
import { join } from 'path';
import { resizeUploadedImage } from '../image_processing/resize';


export const reszieRouter = express.Router();

reszieRouter.post('/:filename', async (req: Request, res: Response) => {
  const fileName: string = req.params.filename;
  const width: string = req.body.width;
  const height: string = req.body.height;
  if (req.body.width == undefined || req.body.height == undefined) {
    res.render('process_image', {
      msg: 'Image Must Have Width and Height',
      file: `/uploaded_images/${req.params.filename}`,
      fileName: req.params.filename,
    });
  } if (parseInt(width) <= 0 || parseInt(height) <= 0 || isNaN(parseInt(height)) || isNaN(parseInt(width))) {
    res.render('process_image', {
      msg: 'Width and Height Must Be Positive',
      file: `/uploaded_images/${req.params.filename}`,
      fileName: req.params.filename
    });
  } else {
    console.log(width);
    resizeUploadedImage(fileName, width, height);
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.sendFile(join(__dirname, '..' ,'..', '..', 'images', 'processed_images', fileName), (err) => {
      res.send(err);
    });
  }
});