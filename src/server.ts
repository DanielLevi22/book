import { app } from "./app";

const PORT = 3333;
app.listen(
  {
    port: PORT,
    host: "0.0.0.0",
  },
  () => {
    console.log(`🚀 server run listening on Port ${PORT} `);
  },
);
