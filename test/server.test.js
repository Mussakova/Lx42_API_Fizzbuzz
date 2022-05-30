const app = require("../lib/server");
const request = require("supertest");
const { get } = require("express/lib/response");

describe("Testing para el server js", ()=>{
    test("1. GET :/", ()=>{
        const response = request(app).get("/");
        expect(response.method).toBe("GET");
        re
    });
    // test("2. GET /v1/explorers/node", ()=>{
    //     const response = request(app).get("/v1/explorers/node").send();
    //     expect(response).toBe(200);
    // });

});