/*
* ProjectName: express-html-minify
* author: plasmashadow
*/
var minify = require('html-minifier').minify;
var tamper = require('tamper');
/*
Default configuration using html-minfy
holds the configuration object.
 */
var defaultConfig = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true
};

/*
  Minify the body while processing the
  response
 */
module.exports = tamper(function(req, res){
  return function(body) {
    return minify(body, defaultConfig);
  }
});
