const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('./app-header')
})

describe('app-header', () => {
  it('should match snapshot', () => {
    const tree = html`<app-header color="blue" />`
    expect(tree.outerHTML).toMatchSnapshot()
  })
})
