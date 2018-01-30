module.exports = function(grunt) {
	require("jit-grunt")(grunt, {
		"clean": "grunt-contrib-clean"
	});

	grunt.initConfig({
		"clean": require("./grunt-conf/clean.js")
	});

	grunt.registerTask("cleanDist", ["clean:dist"]);
};
