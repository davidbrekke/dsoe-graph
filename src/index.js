'use strict';

const server = require('./server');
const config = require('./config');

const startServer = async () => {
  try {
    const app = await server(config);
    app.listen(config).then(({ url }) => {
      console.log(`🚀  server ready at ${url}`);
    });
  } catch (err) {
    console.log('❌ startup error', err);
  }
};

startServer();
