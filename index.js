// this file is copied into node_modules via a local reference in package.json
// see: https://stackoverflow.com/a/14387210/194758

var fs = require('fs');
var deps_folder;
try {
  fs.accessSync(__dirname + '/../../service-deps/basecamp.js', fs.F_OK);
  deps_folder = '../../service-deps/';
}
catch(e) {
  deps_folder = '../deps/';
}

module.exports = require(`${deps_folder}pg-facade.js`);
