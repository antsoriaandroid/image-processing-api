"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint responses', function () {
    it('gets the api endpoint', /*async*/ function ( /*done*/) {
        /* const response = await request.get('/api/images?filename=foto&width=150&height=150');
         expect(response.status).toBe(200);
         done();*/
        request.get('/api/images?filename=foto&width=150&height=150').expect(200) /*,done*/;
    });
});
