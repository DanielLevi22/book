import request from 'supertest'
import { app } from '@/app'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {
    await request(app.server).post('/users').send({
      name: 'John Doe',
      username: 'johndoe',
      password: '123456',
    })

    const authResponse = await request(app.server)
      .post('/sessions/credentials')
      .send({ username: 'johndoe', password: '123456' })

    const cookies = authResponse.get('Set-Cookie')

    if (cookies) {
      const response = await request(app.server)
        .patch('/sessions/refresh')
        .set('Cookie', cookies)
        .send()
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({
        token: expect.any(String),
      })
      expect(response.get('Set-Cookie')).toEqual([
        expect.stringContaining('refreshToken='),
      ])
    } else {
      throw new Error('Authentication failed, no cookies set')
    }
  })
})
