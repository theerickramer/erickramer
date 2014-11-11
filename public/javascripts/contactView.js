var ContactView = Backbone.View.extend({
	template: _.template($('#contact').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown();
	}	
});