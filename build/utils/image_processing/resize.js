"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeUploadedImage = void 0;
const tslib_1 = require("tslib");
const sharp_1 = (0, tslib_1.__importDefault)(require("sharp"));
const path_1 = require("path");
const get_metadata_1 = require("./get_metadata");
function resizeUploadedImage(filename, width, height) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const imageSrc = (0, path_1.resolve)(get_metadata_1.uploadedImages, filename);
        const imageDist = (0, path_1.resolve)(get_metadata_1.processedImages, filename);
        yield (0, sharp_1.default)(imageSrc).resize({
            width: parseInt(width),
            height: parseInt(height)
        }).toFile(imageDist);
    });
}
exports.resizeUploadedImage = resizeUploadedImage;
