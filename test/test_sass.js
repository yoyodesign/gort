const sass = require("sass");
const sassTrue = require("sass-true");

sassTrue.runSass(
	{
		file: "./test/_test.scss",
	},
	{ describe, it, sass }
);
