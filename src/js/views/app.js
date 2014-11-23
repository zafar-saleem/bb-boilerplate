define(['backbone', 'text!../../partials/sample.html'], function(Backbone, SampleView) {
   
    var App = Backbone.View.extend({
    	initialize: function () {
    		console.log('Hello');
    	}
    });
   
    return App; 
});
