import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("Valid call to get the api endpoint", async () => {
    /* const response = await request.get('/api/images?filename=foto&width=150&height=150');
            expect(response.status).toBe(200);
            done();*/

    const response = await request
      .get("/api/images?filename=fjord&width=150&height=150");
      expect(response.status).toBe(200) /*,done*/;
  });
});

describe("Test endpoint invalid responses",  ()  => {
  it("Call to get the api endpoint using incorrect fileName", async () => {
    /* const response = await request.get('/api/images?filename=foto&width=150&height=150');
            expect(response.status).toBe(200);
            done();*/

    const response = await request.get("/api/images?filename=fakePhoto&width=150&height=150")

    expect(response.status).toBe(400) ;
  });
});

describe("Test endpoint invalid responses",  ()  => {
  it("Call to get the api endpoint with missing fileName", async () => {

    const response = await request.get("/api/images?width=150&height=150")

    expect(response.status).toBe(400) ;
  });
});
