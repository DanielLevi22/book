import request from 'supertest'
import { app } from '@/app'

describe('Get recent reviews (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get recent reviews', async () => {
    const response = await request(app.server).get('/recent-reviews').send()
    console.log('response', response.body)
    expect(response.statusCode).toEqual(200)
  })
})
