var ContactView = Backbone.View.extend({
	template: _.template($('#contact').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template()).hide().slideDown();
	}, 

	events: {
		'click button.contact' : 'contact'
	},

	contact: function(){
		var info = {
			name: $('input.name').val(),
			email: $('input.email').val(),
			subject: $('input.subject').val(),
			text: $('textarea.text').val()
		}

		$.ajax({
			type: 'POST',
			url: '/contact',
			data: info
		}).done(function(data){
			if (data["message"] == "Queued. Thank you."){
				$('div.contact').fadeOut(600).html('<h3>Transmission sent</h3>').fadeIn();
			} else {
				$('div.contact').fadeOut(600).html('<h3>Transmission Failed</h3></h5>Please try again</h5>').fadeIn();
			}
		});
	}	
});