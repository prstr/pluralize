'use strict';

var assert = require('assert')
  , pluralize = require('../src/index');

describe('Pluralize', function () {

  it('should emit correct "one"', function () {
    assert(pluralize(1, '%s корова', '%s коровы', '%s коров'), '1 корова');
  });

  it('should emit correct "few"', function () {
    assert(pluralize(3, '%s корова', '%s коровы', '%s коров'), '3 коровы');
  });

  it('should emit correct "many"', function () {
    assert(pluralize(5, '%s корова', '%s коровы', '%s коров'), '5 коров');
  });

  it('should work with formatter', function () {
    var cows = pluralize.formatter('%s корова', '%s коровы', '%s коров');
    assert(cows(100), '100 коров');
    assert(cows(101), '101 корова');
    assert(cows(102), '102 коровы');
    assert(cows(1111), '1111 коров');
  });

});
