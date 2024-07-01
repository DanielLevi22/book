import z from 'zod'
import 'dotenv/config'
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REDIRECT_URI: z.string(),
})

const _env = envSchema.safeParse(process.env)
if (_env.success === false) {
  console.error(_env.error.format())
  throw new Error('❌ Invalid environment variables')
}
export const env = _env.data
