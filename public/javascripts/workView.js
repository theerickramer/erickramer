var WorkView = Backbone.View.extend({
	template: _.template(workTemplate),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown(600);
	}	
});