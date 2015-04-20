
function Ping(config) {

  var _this = this;
  _this.greeting = config.greeting;

  this.route.get('/', function(req, res) {
    res.end('Pong! ' + _this.greeting + '\n');
  });

  this.on('setGreeting', function(txt) {
    // each message sended to me
    _this.greeting = txt;
  });

}

Ping.prototype.destroy = function() {
  this.logger('destroy ping plugin', arguments);
};

Ping.config = require('./config');

module.exports = Ping;