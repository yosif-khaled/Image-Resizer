"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetadata = exports.processedImages = exports.uploadedImages = void 0;
const tslib_1 = require("tslib");
const sharp_1 = (0, tslib_1.__importDefault)(require("sharp"));
const path_1 = require("path");
exports.uploadedImages = (0, path_1.resolve)(__dirname, '..', '..', '..', 'images', 'uploaded_images');
exports.processedImages = (0, path_1.resolve)(__dirname, '..', '..', '..', 'images', 'processed_images');
function getMetadata(filename, filepath) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const targetImage = (0, path_1.resolve)(filepath, filename);
        // replace string in the following function wih filepath + filename
        const metadata = yield (0, sharp_1.default)(targetImage).metadata();
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
    });
}
exports.getMetadata = getMetadata;
