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

    const authReponse = await request(app.server)
      .post('/sessions/credentials')
      .send({ username: 'johndoe', password: '123456' })

    const { token } = authReponse.body

    const profileResponse = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        name: 'John Doe',
        username: 'johndoe',
      }),
    )
  })
})
