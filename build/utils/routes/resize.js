"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reszieRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const path_1 = require("path");
const resize_1 = require("../image_processing/resize");
exports.reszieRouter = express_1.default.Router();
exports.reszieRouter.post('/:filename', (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const fileName = req.params.filename;
    const width = req.body.width;
    const height = req.body.height;
    if (req.body.width == undefined || req.body.height == undefined) {
        res.render('process_image', {
            msg: 'Image Must Have Width and Height',
            file: `/uploaded_images/${req.params.filename}`,
            fileName: req.params.filename,
        });
    }
    if (parseInt(width) <= 0 || parseInt(height) <= 0 || isNaN(parseInt(height)) || isNaN(parseInt(width))) {
        res.render('process_image', {
            msg: 'Width and Height Must Be Positive',
            file: `/uploaded_images/${req.params.filename}`,
            fileName: req.params.filename
        });
    }
    else {
        console.log(width);
        (0, resize_1.resizeUploadedImage)(fileName, width, height);
        yield new Promise(resolve => setTimeout(resolve, 5000));
        res.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'images', 'processed_images', fileName), (err) => {
            res.send(err);
        });
    }
}));
