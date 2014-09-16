/**
 * A no-op version for node.js. See helper.js for the actual browser code.
 *
 * @copyright The Financial Times Limited
 */

module.exports = function(view) {
  view.on('before initialize', function() {
    var nope = function(){};
    this.delegate = {
      on: nope,
      off: nope,
      root: nope,
      destroy: nope,
    };
  });

  view.on('destroy', function() {
    this.delegate = undefined;
  });
};
