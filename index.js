
function Ping(config, hub, router, log) {

  var _this = this;
  _this.greeting = config.greeting;

  hub.once('plugin-init', function() {

    router.get('/', function(req, res) {
      res.end('Pong! ' + _this.greeting + '\n');
    });

  });

  hub.on('plugin:ping:*', function(txt) {
    _this.greeting = txt;

    log('greeting set to ', txt);
  });

  hub.once('destroy', function() {
    // do some clean job
    log('plugin ping is on destroy');
  });

}

// default configs export to datahub
Ping.config = require('./config');

module.exports = Ping;
