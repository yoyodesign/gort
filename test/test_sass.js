var path = require("path");
var sassTrue = require("sass-true");

var file = path.join(__dirname, "_test.scss");

sassTrue.runSass({ file }, { describe, it });
