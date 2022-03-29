"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDimensions = void 0;
const tslib_1 = require("tslib");
const image_size_1 = (0, tslib_1.__importDefault)(require("image-size"));
function getDimensions(filepath) {
    const dimensions = (0, image_size_1.default)(filepath);
    return dimensions;
}
exports.getDimensions = getDimensions;
