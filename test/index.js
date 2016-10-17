// Enable all built-in GEDCOM X extensions
var GedcomX = require('gedcomx-js');
GedcomX.enableRsExtensions();
GedcomX.enableRecordsExtensions();
GedcomX.enableAtomExtensions();

// Setup the FamilySearch extensions
require('../')(GedcomX);