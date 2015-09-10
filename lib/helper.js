/**
 * A dom-delegate helper for Financial Times' FruitMachine
 *
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
  view.on('before initialize', function() {
    this.delegate = delegate();
  });

  view.on('render', function() {
    this.delegate.root(this.el);
  });

  view.on('teardown', function() {
    this.delegate.root();
  });

  view.on('destroy', function() {
    this.delegate.destroy();
    this.delegate = undefined;
  });
};
