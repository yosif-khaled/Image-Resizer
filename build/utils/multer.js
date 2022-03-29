"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const tslib_1 = require("tslib");
// handling uploaded files and storing it locally
const multer = require('multer');
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const mb = 1024 * 1024;
function uploadFile() {
    const storage = multer.diskStorage({
        destination: 'L:\\fwd_projects\\project_1\\images\\uploaded_images',
        filename: function (req, file, cb) {
            // the cb take an error as a first arg
            // what you want to name the file as 2nd arg
            // what is the difference between original and filename
            cb(null, `${file.originalname}-${Date.now()}${path_1.default.extname(file.originalname)}`);
        }
    });
    let checkFileType = function (file, cb) {
        // we want to check the extension and the mime type
        // allowed extensions
        const fileTypes = /jpeg|jpg|png|gif/;
        // checking the extension
        const extname = fileTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        // checking the mime type
        const mimetype = fileTypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        }
        else {
            cb('ERROR: Images Only');
        }
    };
    let upload = multer({
        storage: storage,
        limits: { fileSize: 3 * mb },
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        }
    });
    return upload;
}
exports.uploadFile = uploadFile;
