module.exports = {
  launch: {
    slowMo: process.env.HEADLESS !== 'false' ? 0 : 100,
    headless: process.env.HEADLESS !== 'false'
  }
}
