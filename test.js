/**
 * hours <https://github.com/jonschlinkert/hours>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var should = require('should');
var moment = require('moment');
var hours = require('./');

describe('hours()', function() {
  it('should get the hours for a day.', function() {
    hours('day').should.equal(moment.duration(1, 'day').asHours());
  });

  it('should get the hours for a week.', function() {
    hours('week').should.equal(moment.duration(1, 'week').asHours());
  });

  it('should get the hours for the current day, since midnight.', function() {
    var today = hours('today');
    var now = new Date();
    var since = ((now.getTime() - now.setHours(0, 0, 0, 0)) / 1000) | 0;
    (Math.round(since / 60 / 60)).should.equal(today);
  });
});
