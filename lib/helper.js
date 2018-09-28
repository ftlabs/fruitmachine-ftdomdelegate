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
    // https://github.com/Financial-Times/ftdomdelegate exposes either a Prototype or an instantiated Object
    // Which one depends on whether Bower (bower.json) or Node (package.json) is preferred in the client library's build tool (e.g.: Browserify, Webpack)
    this.delegate = typeof delegate === 'function' ? new delegate() : delegate();
  });

  view.on('mount', function() {
    this.delegate.root(this.el);
  });

  view.on('unmount', function() {
    this.delegate.root();
  });

  view.on('destroy', function() {
    this.delegate.destroy();
    this.delegate = undefined;
  });
};
