import assert from 'assert'
import { app } from '../src/app'

describe('authentication', () => {
  const userInfo = {
    email: 'someone@example.com',
    password: 'supersecret'
  }
  let user: any

  before(async () => {
    try {
      user = await app.service('users').create(userInfo)
    } catch (error) {
      // Do nothing, it just means the user already exists and can be tested
    }
  })
  after(async () => {
    const { id } = app.service('users')
    app.service('users').remove(user[id])
  })

  it('authenticates user and creates accessToken', async () => {
    const { user, accessToken } = await app.service('authentication').create(
      {
        strategy: 'local',
        ...userInfo
      },
      {}
    )

    assert.ok(accessToken, 'Created access token for user')
    assert.ok(user, 'Includes user in authentication data')
  })

  it('registered the authentication service', () => {
    assert.ok(app.service('authentication'))
  })
})
