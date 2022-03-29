"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
exports.indexRouter = express_1.default.Router();
exports.indexRouter.get('', (req, res) => {
    res.render('index');
});
