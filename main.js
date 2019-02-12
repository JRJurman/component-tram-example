const Tram = require('tram-one')

if (window) { window.tramEngine = {} }
const app = new Tram({ webEngine: window.tramEngine })
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({ color: require('./components/colorized-header').actions })
app.start('.main')
