'use strict'

const server = require('./server') // server module
const config = require('./config') // config module

;(async () => {
  try {
    // creating an app instance by passing the config into the server
    const app = await server(config)

    // start the server on the port specified in config
    app.listen(config).then(({ url }) => {
      console.log(`🚀  server ready at ${url}`)
    })
  } catch (err) {
    console.log('❌ startup error', err)
  }
})()
