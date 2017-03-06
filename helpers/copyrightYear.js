var Handlebars = require('handlebars');

/*
 * Return the current year (for copyright in footer)
 *
 * @return: year
 */
module.exports = function() {
  var d = new Date();
  return new Handlebars.SafeString(d.getFullYear());
};
