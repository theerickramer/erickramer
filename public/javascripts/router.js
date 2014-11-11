$(function(){

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'index',
			'work' : 'work',
			'contact' : 'contact'
		}
	});

	var router = new Router();

	router.on('route:index', function(){
		var aboutView = new AboutView({el: $('main')});
	});

	router.on('route:work', function(){
		var workView = new WorkView({el: $('main')});
	});

	router.on('route:contact', function(){
		var contactView = new ContactView({el: $('main')});
	});

	Backbone.history.start();

});