var CvView = Backbone.View.extend({
	template: _.template($('#cv').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown(600);
	}	
});