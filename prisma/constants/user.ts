import { faker } from "@faker-js/faker";

export const users = [
  {
    id: "48e458c0-8b1e-4994-b85a-1e1cfcc9dd60",
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar_url: faker.image.avatar(),
  },
  {
    id: "c296c6c0-5c59-40dd-aa8a-ef2b015b7502",
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar_url: faker.image.avatar(),
  },
  {
    id: "4383f783-6ce1-4f92-b1dd-7a7a693c4aef",
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar_url: faker.image.avatar(),
  },
  {
    id: "6624df61-5947-4f8c-9c7e-39c8c40fa158",
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar_url: faker.image.avatar(),
  },
];
