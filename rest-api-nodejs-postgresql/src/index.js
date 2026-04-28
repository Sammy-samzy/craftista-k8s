const express = require('express');

// If migration mode, run migration and exit
if (process.env.RUN_MIGRATIONS === 'true') {
  require('./migrate');
} else {
  const app = express();

  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // routes
  app.use(require('./routes/index'));

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

  app.listen(process.env.PORT || 4000);
  console.log('Server on port 4000');
}
