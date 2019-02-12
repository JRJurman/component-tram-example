const colorActions = require('./color-actions')

describe('color-actions', () => {
  test('should default to a color', () => {
    const initValue = colorActions.init()

    expect(initValue).toBeDefined()
  })

  test('should change the color on advance', () => {
    const initColor = colorActions.init()
    const advancedColor = colorActions.advance(initColor)

    expect(advancedColor).toBeDefined()
    expect(advancedColor).not.toBe(initColor)
  })
})
