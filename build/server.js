"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const path_1 = require("path");
const index_1 = require("./utils/routes/index");
const upload_1 = require("./utils/routes/upload");
const resize_1 = require("./utils/routes/resize");
const port = 5000;
const app = (0, express_1.default)();
app.set('views', (0, path_1.resolve)(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/uploaded_images', express_1.default.static((0, path_1.resolve)(__dirname, '..', 'images', 'uploaded_images')));
app.use('/processed_images', express_1.default.static((0, path_1.resolve)(__dirname, '..', 'images', 'processed_images')));
app.use('/', index_1.indexRouter);
app.use('/upload', upload_1.uploadRouter);
app.use('/processed_images', resize_1.reszieRouter);
app.listen(port, () => console.log(`Image_API_SERVER RUNNING ON PORT ${port}`));
exports.default = app;
