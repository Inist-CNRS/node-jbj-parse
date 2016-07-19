/*jshint node:true,laxcomma:true*/
/* global describe, it */
'use strict';
var assert = require('assert')
  , JBJ = require('jbj');

JBJ.use(require('..'));

describe('asynchronous error', function () {

  var input = {
    "a" : {
      "b" : {
        "c" : "1234"
      },
      "d" : null
    }
  };

  it('error #1', function(done) {
    var stylesheet = {
      "$a" : {
        "set" : "\"xxxx",
        "parseJSON" : true
      }
    };
    JBJ.render(stylesheet, input, function (err, output) {
      assert.equal(err.name, 'SyntaxError');
      done();
    });
  });

  it('error #2', function(done) {
    var stylesheet = {
      "assert" : "a == 'X'"
    };
    JBJ.render(stylesheet, input, function (err, output) {
      assert.equal(err.name, 'Error');
      done();
    });
  });

});
