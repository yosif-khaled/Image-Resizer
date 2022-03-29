"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyDirectory = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function emptyDirectory() {
    const uploadedImages = (0, path_1.resolve)(__dirname, '..', '..', '..', 'images', 'uploaded_images');
    const processedImages = (0, path_1.resolve)(__dirname, '..', '..', '..', 'images', 'processed_images');
    (0, fs_1.readdirSync)(uploadedImages).forEach(file => (0, fs_1.rmSync)(`${uploadedImages}/${file}`));
    (0, fs_1.readdirSync)(processedImages).forEach(file => (0, fs_1.rmSync)(`${processedImages}/${file}`));
}
exports.emptyDirectory = emptyDirectory;
