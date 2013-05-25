/**
 * A dom-delegate helper for Financial Times' FruitMachine
 *
 * @version 0.0.2
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times Limited
 */

/**
 * External dependency
 */

var delegate = require('dom-delegate');

/**
 * Link up dom-delegate with fruitmachine
 */

module.exports = function(view) {
  view.on('initialize', function() {
    this.delegate = delegate();
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
