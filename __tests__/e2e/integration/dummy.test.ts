import { CONSTANTS } from '../config/constants'
import path from 'path'

describe('dummy', () => {
  beforeAll(async () => {
    await page.goto('https://google.com', { waitUntil: CONSTANTS.NETWORK as any })
  })

  it('dummy', async () => {
    await expect(page.title()).resolves.toMatch('Google')
    await page.screenshot({
      path: path.join(CONSTANTS.SCREEN_SHOT_DIR, '/dummy.png'),
      fullPage: true
    })
  })
})
