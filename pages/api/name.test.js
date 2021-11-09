import { createMocks } from 'node-mocks-http'
import nameApi from 'pages/api/name'

describe('/api/name', () => {
  test('returns a message with the specified animal', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
      },
    })

    await nameApi(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'Dev.to world',
      }),
    )
  })
})