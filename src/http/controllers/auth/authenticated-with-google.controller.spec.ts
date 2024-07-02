import request from 'supertest'
import { app } from '@/app'

describe('Authenticate with Google (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate google', async () => {
    const response = await request(app.server).post('/sessions/google').send({
      code: '4/0ATx3LY4MILrhjaP1hqsJnxVbpoUb9D9Im9wsA83aiDlF568ERaxtba2lSjY3tQWiHUaW1A',
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })
})
