import { app } from "./app";
import { env } from "./env";

app.listen(
  {
    port: env.PORT,
    host: "0.0.0.0",
  },
  () => {
    console.log(`🚀 server run listening on Port ${env.PORT} `);
  },
);
