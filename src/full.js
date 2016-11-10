// Entry point for a full webpack build of gedcomx-fs-js that includes gedcomx-js
var GedcomX = require('gedcomx-js');
GedcomX.addExtensions(require('./index'));
module.exports = GedcomX;