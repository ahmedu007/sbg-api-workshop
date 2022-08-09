const request = require("supertest");

describe("Test type: `GET`", function () {
  it("responds with expected JSON structure", function (done) {
    request("http://localhost:3000")
      .get("/status")
      .expect(200)
      .expect('{\n  "code": 200,\n  "message": "OK"\n}', done);
  });
});
