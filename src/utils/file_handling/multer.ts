// handling uploaded files and storing it locally
import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express'
import path from 'path';

const mb: number = 1024 * 1024;

type FileNameCallback = (error: Error | null, filename: string) => void

export function uploadFile() {

  const storage = multer.diskStorage({
    destination: './images/uploaded_images', // solve with path.resolve
    filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback) {
      cb(null, `${path.parse(file.originalname).name}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });

  const checkFileType = function (file: Express.Multer.File, cb: FileFilterCallback) {
    // we want to check the extension and the mime type
    // allowed extensions
    const fileTypes = /jpeg|jpg|png|gif/;
    // checking the extension
    const extname: boolean = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // checking the mime type
    const mimetype: boolean = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  };

  const upload = multer({
    storage: storage,
    limits: { fileSize: 3 * mb },
    fileFilter: function (req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
      checkFileType(file, cb);
    }
  });

  return upload;
}