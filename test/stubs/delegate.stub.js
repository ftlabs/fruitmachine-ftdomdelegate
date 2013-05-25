/*jshint node:true*/

'use strict';

/**
 * Delegate Mock
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times Limited
 */

module.exports = function(root) {
  return new DelegateStub(root);
};
module.exports.Delegate = DelegateStub;

function DelegateStub(root) {
  window.spys.instantiate(root);
}

DelegateStub.prototype.root = function(root) {
  window.spys.root(root);
};

DelegateStub.prototype.destroy = function() {
  window.spys.destroy();
};
