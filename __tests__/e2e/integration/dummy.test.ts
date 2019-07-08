const path = require('path')
const CONSTANTS = require('../config/constants')

describe('dummy', () => {
  beforeAll(async () => {
    await page.goto('https://google.com', { waitUntil: CONSTANTS.NETWORK })
  })

  it('dummy', async () => {
    await expect(page.title()).resolves.toMatch('Google')
    await page.screenshot({ path: path.join(CONSTANTS.SCREEN_SHOT_DIR, '/dummy.png'), fullPage: true })
  })
})
