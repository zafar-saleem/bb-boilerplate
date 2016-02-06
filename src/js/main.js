/*global require:false */
require.config({
	
	urlArgs: "version=" + (new Date()).getTime(),

	paths: {
		'jquery'     : 'libs/jquery/dist/jquery',
		'underscore' : 'libs/underscore/underscore',
		'backbone'   : 'libs/backbone/backbone',
        'text'       : 'plugins/text'
	}
});

require(['views/app'], function (App) {
    new App();
});