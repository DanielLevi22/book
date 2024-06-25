import z from "zod";
import "dotenv/config";
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("❌ Invalid environment variables");
  console.error(_env.error.format());
  process.exit(1);
}
export const env = _env.data;
