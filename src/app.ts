import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'
import { authenticateWithCredentialsController } from './http/controllers/auth/authenticate-with-credentials.controller'
import { refreshController } from './http/controllers/auth/refresh-controller'
import { registerWithCredentialsController } from './http/controllers/user/register-with-credentials.controller'
import { profileController } from './http/controllers/user/profile.controller'
import { authenticateWithGoogleController } from './http/controllers/auth/authenticated-with-google.controller'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors)
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Book Rating',
      description: 'Back-End API for Book Rating App',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: { expiresIn: '10m' },
})
app.register(fastifyCookie)

app.register(registerWithCredentialsController)
app.register(authenticateWithCredentialsController)
app.register(profileController)
app.register(refreshController)
app.register(authenticateWithGoogleController)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
