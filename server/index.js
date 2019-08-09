const newrelic = require('newrelic');
const app = require('./app');

const port = 3003;

module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});