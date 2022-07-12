import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("Valid call to get the api endpoint", /*async*/ (/*done*/) => {
    /* const response = await request.get('/api/images?filename=foto&width=150&height=150');
            expect(response.status).toBe(200);
            done();*/

    request
      .get("/api/images?filename=foto&width=150&height=150")
      .expect(200) /*,done*/;
  });
});
