/*!
 * hours <https://github.com/jonschlinkert/hours>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var seconds = require('seconds');

module.exports = function(timespan) {
  return Math.round(seconds(timespan) / 60 / 60);
};
