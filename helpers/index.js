var fs = require('fs'),
    path = require('path');

/*
 * Auto-load all helpers in the directory
 */

var helpers = {};

fs.readdirSync(__dirname).forEach(function(file) {
  var name = path.basename(file, '.js');
  if(name !== 'index') {
    helpers[name] = require(__dirname + '/' + file);
  }
});

module.exports = helpers;
