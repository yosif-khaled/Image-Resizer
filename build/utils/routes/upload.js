"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const delete_files_1 = require("../file_handling/delete_files");
const image_size_1 = require("../image_processing/image_size");
const multer_1 = require("../file_handling/multer");
exports.uploadRouter = express_1.default.Router();
const upload = (0, multer_1.uploadFile)().single("img");
exports.uploadRouter.post('/', (req, res) => {
    (0, delete_files_1.emptyDirectory)();
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            });
        }
        else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Please Select an Image...'
                });
            }
            else {
                const dimensions = (0, image_size_1.getDimensions)(req.file.path);
                res.render('process_image', {
                    msg: 'File Uploaded!',
                    file: `/uploaded_images/${req.file.filename}`,
                    fileName: req.file.filename,
                    width: dimensions.width,
                    height: dimensions.height
                });
            }
        }
    });
});
