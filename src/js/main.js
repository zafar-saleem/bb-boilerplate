/*global require:false */
require.config({
	shim: {},

	paths: {
		'jquery': 'libs/jquery/dist/jquery',
		'underscore': 'libs/underscore/underscore',
		'backbone': 'libs/backbone/backbone'
	}
});

require(['views/app'], function (AppView) {
	new AppView();
});
