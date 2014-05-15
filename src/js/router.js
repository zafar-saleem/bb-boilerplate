/*global define:false */
define(['backbone'], function(Backbone) {
   
    var Main = Backbone.Router.extend({
        routes: {
            '': 'callback'
        },

        callback: function () {
            
        }
    });
   
    return Main;
});