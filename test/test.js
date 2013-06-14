/*jshint node:true*/

'use strict';

/**
 * Wiring up test for fruitmachine-ftdomdelegate
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times Limited
 */

var stubs = {
  'dom-delegate': require('./stubs/delegate.stub')
};
var proxyquire = require('proxyquireify')(require);

window.fruitMachineFTDOMDelegate = proxyquire('../lib/helper', stubs);
