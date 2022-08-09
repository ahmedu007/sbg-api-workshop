const request = require("supertest");

describe("Test type: `POST`", function () {
  // Connect to your database
  beforeAll(async () => {
    // const url = `mongodb://127.0.0.1/example-db`;
    // await mongoose.connect(url, { useNewUrlParser: true });
  });

  it("Should update the fouls in the db", async () => {
    const newFoul = {
      id: "test",
      team: "France",
      player: "Zidanne",
      fouls: "1",
      matchId: "12",
    };

    const res = await request("http://localhost:3000").post("/fouls").send(newFoul);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(newFoul);
  });
});
