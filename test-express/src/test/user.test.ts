import request from "supertest";
import app from "..";
import prisma from "../prisma";
import nock from "nock";

describe("GET /api/users", () => {
  const sampleUser = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Dine",
      email: "janedine@gmail.com",
    },
  ];

  // before run
  beforeAll(async () => {
    await prisma.$connect();
  });

  beforeEach(async () => {
    const users = await prisma.user.findMany();
    if (users.length == 0) {
      await prisma.user.createMany({ data: sampleUser });
    }
  });

  afterEach(async () => {
    await prisma.user.deleteMany({ where: {} });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return an array of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      users: sampleUser,
    });
  });
});

describe("GET /api/posts", () => {
  it("Should return an array of posts", async () => {
    const mockResponse = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];

    nock("https://jsonplaceholder.typicode.com")
      .get("/posts")
      .reply(200, mockResponse);

    const response = await request(app).get("/api/posts");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});
