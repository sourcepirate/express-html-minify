var express = require('express');
var minify = require('html-minifier').minify;
var interceptor = require('express-interceptor');


var defaultConfig = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true
}

module.exports = interceptor(function(req, res) {
  return {
    isInterceptable: function() {
      var flag = /text\/html/.test(res.get('Content-Type')) || !res.get('Content-Type');
      return flag;
    },
    intercept: function(body, send) {
      send(minify(body, defaultConfig));
    }
  }
});
