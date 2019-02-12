const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../../elements/app-header')
})

const colorizedHeader = (attrs) => {
  return html`
    <app-header color=${attrs.color} onclick=${attrs.advance} >
      This is a very cool podcast
    </app-header>
  `
}

module.exports = (attrs) => colorizedHeader({
  color: window.tramEngine.store.color,
  advance: window.tramEngine.actions.advance,
  ...attrs
})
module.exports['colorized-header'] = colorizedHeader
