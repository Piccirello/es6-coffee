require('coffeescript/register')

const Test2 = require('./test2.coffee');

module.exports = (data) => {
  Test2(data);
}

