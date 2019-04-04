const app = require('../../app');
const config = require('../config');
app.listen(config.port, error => {
  console.log(
    error ? 'Error initializing server' : `Listening on port ${config.port}`,
  );
});
