"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = (0, tslib_1.__importDefault)(require("supertest"));
const path_1 = require("path");
const fs_1 = require("fs");
const server_1 = (0, tslib_1.__importDefault)(require("../server"));
const resize_1 = require("../utils/image_processing/resize");
const image_size_1 = require("../utils/image_processing/image_size");
const filename = 'Cat_Eye.jpg'; // name of picture used in testing ./src/tests/Cat_Eye.jpg
const resizedFilePath = (0, path_1.resolve)(__dirname, '..', '..', 'images', 'processed_images', filename);
const uploadedFilePath = (0, path_1.resolve)(__dirname, '..', '..', 'images', 'uploaded_images', filename);
const request = (0, supertest_1.default)(server_1.default);
describe('testing', () => {
    describe("Resize Image Using Sharp Library :: Testing Using Meta Data", () => {
        const height = '300';
        const width = '300';
        console.log(resizedFilePath);
        beforeAll(() => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            yield (0, resize_1.resizeUploadedImage)(filename, height, width);
        }));
        it("-- Image Will Be Assigned To New Directory", () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            expect((0, fs_1.existsSync)(resizedFilePath)).toBeTrue;
        }));
        it("-- Image Will Be Resized", () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            let checkDim;
            if ((0, image_size_1.getDimensions)(uploadedFilePath).width == (0, image_size_1.getDimensions)(resizedFilePath).width && (0, image_size_1.getDimensions)(uploadedFilePath).height == (0, image_size_1.getDimensions)(resizedFilePath).height) {
                checkDim = true;
            }
            else {
                checkDim = false;
            }
            expect(checkDim).toBeTrue;
            // check if file width and hegiht changed
        }));
    });
    describe('Get / :: Testing Home Endpoint', () => {
        it('-- Should Render index.ejs and return status code 200', () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            const response = yield request.get('/');
            expect(response.status).toBe(200);
        }));
    });
    describe('Get /upload :: Testing Home Endpoint', () => {
        it('-- Should Render index.ejs', () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            const response = yield request.post('/upload');
            expect(response.status).toBe(200);
        }));
    });
    describe('Get /processed_images/:filename :: Testing File IS SENT', () => {
        it('-- Should Render index.ejs and return status code 200', () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            const response = yield request.post(`/processed_images/${filename}`);
            expect(response.status).toBe(200);
        }));
    });
    describe('Get /upload :: Testing Home Endpoint', () => {
        it('IF POST /upload is Accessed Again -- Should Empty Directory', () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            yield request.post('/upload');
            expect((0, fs_1.existsSync)(uploadedFilePath)).toBeTrue;
        }));
    });
    afterAll(() => {
        try {
            (0, fs_1.copyFileSync)((0, path_1.resolve)('./', 'src', 'tests', 'Cat_Eye.jpg'), uploadedFilePath);
        }
        catch (err) {
            console.log(err);
        }
    });
});
