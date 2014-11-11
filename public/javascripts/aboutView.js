var AboutView = Backbone.View.extend({
	template: _.template(aboutTemplate),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown();
	}	
});