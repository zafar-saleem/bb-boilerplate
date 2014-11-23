define(function(require) {
   
	var Backbone = require('backbone'),
		SampleView = require('text!../../templates/sample.html');

    var App = Backbone.View.extend({

    	initialize: function () {
    		console.log('Hello');
    	}
    	
    });
   
    return App; 
});
