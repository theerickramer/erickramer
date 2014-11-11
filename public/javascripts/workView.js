var WorkView = Backbone.View.extend({
	template: _.template($('#work').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown(600);
	}	
});