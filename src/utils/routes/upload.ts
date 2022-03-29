import express from 'express';
import { emptyDirectory } from '../file_handling/delete_files';
import { getDimensions } from '../image_processing/image_size';
import { uploadFile } from '../file_handling/multer';

export const uploadRouter = express.Router()
const upload = uploadFile().single("img");

uploadRouter.post('/', (req, res) => {
  emptyDirectory();
  upload(req, res, (err: string) => {
    if (err) {
      res.render('index', {
        msg: err
      });
    } else {
      if (req.file == undefined) {
        res.render('index', {
          msg: 'Please Select an Image...'
        });
      } else {
        const dimensions = getDimensions(req.file.path);
        res.render('process_image', {
          msg: 'File Uploaded!',
          file: `/uploaded_images/${req.file.filename}`,
          fileName: req.file.filename,
          width: dimensions.width,
          height: dimensions.height
        });
      }
    }
  })
});