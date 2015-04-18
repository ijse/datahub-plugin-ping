
function Ping(config, hub, router) {

  this.greeting = config.greeting;

  hub.once('plugin-init', function() {

    router.get('/', function(req, res) {
      res.end('Pong! ' + this.greeting + '\n');
    });

  });

  hub.on('plugin:ping:*', function(txt) {
    this.greeting = txt;

    console.log('greeting set to ', txt);
  });

}

Ping.prototype.destroy = function() {
  // release resources
}

module.exports = Ping;
