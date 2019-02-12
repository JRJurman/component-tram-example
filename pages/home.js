const Tram = require('tram-one')
const html = Tram.html({
  'colorized-header': require('../components/colorized-header'),
  'no-js-warning': require('../elements/no-js-warning')
})

module.exports = (store, actions) => {
  return html`
    <div>
      <colorized-header />
      <no-js-warning />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit <code>test-app/pages/home.js</code>.
      </div>
    </div>
  `
}
