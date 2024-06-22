export const books = [
  {
    id: "c8176d86-896a-4c21-9219-6bb28cccaa5f",
    name: "14 Hábitos de Desenvolvedores Altamente Produtivos",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl:
      "public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.jpg",
    slug: "14-habitos-de-desenvolvedores-altamente-produtivos",
    totalPages: 160,
    author: {
      connect: { id: "8751f8ec-8c95-4681-8a33-e368feb46301" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
      ],
    },
  },
  {
    id: "375948a7-bca3-4b59-9f97-bfcde036b4ca",
    name: "O Hobbit",
    description:
      "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh",
    coverUrl: "public/images/books/o-hobbit.jpg",
    slug: "o-hobbit",
    totalPages: 360,
    author: {
      connect: { id: "10f7e15f-11aa-4d13-8741-3261b2919d59" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
        {
          category: {
            connect: { id: "e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67" },
          },
        },
      ],
    },
  },
  {
    id: "86596503-369b-4614-bacf-11c9bb73e779",
    name: "O guia do mochileiro das galáxias",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/o-guia-do-mochileiro-das-galaxias.jpg",
    slug: "o-guia-do-mochileiro-das-galaxias",
    totalPages: 250,
    author: {
      connect: { id: "0519d2da-be94-4364-8187-4170c3b5e355" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
        {
          category: {
            connect: { id: "2e65c193-325a-40c3-98f3-6c13e9b75b02" },
          },
        },
      ],
    },
  },
  {
    id: "d0d70b05-d48f-4d83-b1e8-0b4dd984c97d",
    name: "A revolução dos bichos",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/a-revolucao-dos-bichos.jpg",
    slug: "a-revolucao-dos-bichos",
    totalPages: 350,
    author: {
      connect: { id: "121c922a-36b9-4fcb-8e8d-af0396700f3b" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "a1d0ee25-9c9a-49c8-84eb-7af1e0dd356d" },
          },
        },
        {
          category: {
            connect: { id: "997f8a10-21fb-4c80-bd16-17e8b79a31a3" },
          },
        },
      ],
    },
  },
  {
    id: "48b86ac2-014e-401d-bcbb-331ce5f4a457",
    name: "O fim da eternidade",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/o-fim-da-eternidade.jpg",
    slug: "o-fim-da-eternidade",
    totalPages: 165,
    author: {
      connect: { id: "86f41d13-350c-4add-8884-b8203e883c8f" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
        {
          category: {
            connect: { id: "70efc33d-7d6b-4db4-bab6-524c4c4b2e2c" },
          },
        },
      ],
    },
  },
  {
    id: "e688c24f-d14d-4607-a12e-90e6e367398d",
    name: "Entendendo Algoritmos",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/entendendo-algoritmos.jpg",
    slug: "entendendo-algoritmos",
    totalPages: 165,
    author: {
      connect: { id: "ca25939d-f2a9-47aa-9ee2-79034ea39457" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
  {
    id: "0440ad7d-230e-4573-b455-84ca38b5d339",
    name: "Código Limpo",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/codigo-limpo.jpg",
    slug: "codigo-limpo",
    totalPages: 365,
    author: {
      connect: { id: "147f3e49-18a8-44d6-a759-4bac354cc7cd" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
  {
    id: "14f410df-b28a-4e72-b1b4-363e26e160dd",
    name: "O poder do hábito",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/o-poder-do-habito.jpg",
    slug: "o-poder-do-habito",
    totalPages: 288,
    author: {
      connect: { id: "dc7134e0-074c-4153-98b0-a0d055e67e83" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "a4d63d4e-f8ad-4a60-b7b9-9d925a2a8a92" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
  {
    id: "d2870ad0-3312-4ac2-af9f-76af6565587d",
    name: "Arquitetura limpa",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/arquitetura-limpa.jpg",
    slug: "arquitetura-limpa",
    totalPages: 288,
    author: {
      connect: { id: "147f3e49-18a8-44d6-a759-4bac354cc7cd" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
  {
    id: "4fd2b389-b211-40b5-9797-f78cbb985645",
    name: "Histórias extraordinárias",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/historias-extraordinarias.jpg",
    slug: "historias-extraordinarias",
    totalPages: 332,
    author: {
      connect: { id: "f8c8a29f-b5c6-4f8d-988d-84592551aa62" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
        {
          category: {
            connect: { id: "7c8dc74a-2e03-4d72-96de-822e332e5530" },
          },
        },
      ],
    },
  },
  {
    id: "6de9f6b8-5ff4-4e06-b9f4-843eca462803",
    name: "Refatoração",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/refatoracao.jpg",
    slug: "refatoracao",
    totalPages: 332,
    author: {
      connect: { id: "1c29814b-1b6e-49f1-b5f0-feb0d7e486be" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
  {
    id: "d0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9",
    name: "Domain-Driven Design",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/domain-driven-design.jpg",
    slug: "domain-driven-design",
    totalPages: 288,
    author: {
      connect: { id: "c593cdb5-f28a-466b-b54e-38ff02c72d7c" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "a2891eaa-6d9e-48d8-a86a-10aa017d3d3f" },
          },
        },
      ],
    },
  },
  {
    id: "1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd",
    name: "Viagem ao Centro da Terra",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/viagem-ao-centro-da-terra.jpg",
    slug: "viagem-ao-centro-da-terra",
    totalPages: 288,
    author: {
      connect: { id: "d63ff712-3e08-4944-88a1-a3a77b470e1d" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "70efc33d-7d6b-4db4-bab6-524c4c4b2e2c" },
          },
        },
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
      ],
    },
  },
  {
    id: "404e47f8-da53-44fd-ab53-37ed171c3a9f",
    name: "Fragmentos do Horror",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/fragmentos-do-horror.jpg",
    slug: "fragmentos-do-horror",
    totalPages: 144,
    author: {
      connect: { id: "66474688-d672-4968-b012-724e8a397144" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09" },
          },
        },
        {
          category: {
            connect: { id: "a0a61b53-37d7-48ec-9b92-6db074f6d9c9" },
          },
        },
      ],
    },
  },
  {
    id: "66cb0f47-7e20-4492-b640-9c020fcae6f2",
    name: "O Programador Pragmático",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    coverUrl: "public/images/books/o-programador-pragmatico.jpg",
    slug: "o-programador-pragmatico",
    totalPages: 205,
    author: {
      connect: { id: "ef99f9f2-3457-490e-b7c7-7c9bc9c3223d8" },
    },
    bookscategories: {
      create: [
        {
          category: {
            connect: { id: "c9f22067-4978-4a24-84a1-7d37f343dfc2" },
          },
        },
        {
          category: {
            connect: { id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d" },
          },
        },
      ],
    },
  },
];
