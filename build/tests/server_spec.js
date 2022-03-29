"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = (0, tslib_1.__importDefault)(require("supertest"));
const server_1 = (0, tslib_1.__importDefault)(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', (done) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
        done();
    }));
});
