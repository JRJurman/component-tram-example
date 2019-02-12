const Tram = require('tram-one')
const html = Tram.html({
  'colorized-header': require('./colorized-header')['colorized-header']
})

describe('colorized-header', () => {
  it('should match snapshot', () => {
    const tree = html`<colorized-header color="red" />`
    expect(tree.outerHTML).toMatchSnapshot()
  })
})
