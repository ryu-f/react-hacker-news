import path from 'path'
import { CONSTANTS } from '../config/constants'

describe('dummy', () => {
  beforeAll(async () => {
    await page.goto('https://google.com', { waitUntil: CONSTANTS.NETWORK as any })
  })

  it('dummy', async () => {
    await expect(page.title()).resolves.toMatch('Google')
    await page.screenshot({ path: path.join(CONSTANTS.SCREEN_SHOT_DIR, '/dummy.png'), fullPage: true })
  })
})
