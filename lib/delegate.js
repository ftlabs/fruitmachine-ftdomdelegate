/**
 * A dom-delegate helper for Financial Times' FruitMachine
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times Limited
 */

var Delegate = require('delegate');
module.exports = function(view) {

  view.on('initialize', function() {
    this.delegate = new Delegate();
  });

  view.on('setup', function() {
    this.delegate.root(this.el);
  });

  view.on('teardown', function() {
    this.delegate.root();
  });

  view.on('destroy', function() {
    this.delegate.destroy();
    delete this.delegate;
  });
};
