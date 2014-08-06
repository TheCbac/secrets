Router.map(function(){
	this.route('home',{
		path:'/',
		template:"01_letters_tmpl"
	});

	this.route('01a_lettersHint_link',{
		path:'/01a_lettersHint',
		template:'01a_lettersHint_tmpl'
	});

	this.route('02_comments_link',{
		path:'/comments',
		template:'02_comments_tmpl'
	});


	// // for rendering '404'
	// this.route('regionEdit', {
	// 	path: '/region/:_id',
	// 	waitOn: function() {
	// 		return Meteor.subscribe('region', this.params._id);
	// 	},
	// 	data: function() {
	// 		var region = Regions.findOne({
	// 			_id: this.params._id
	// 		});
	// 		if(!region)
	// 			this.render("notFound");
	// 		else
	// 			return region;
	// 	}
	// });

	
});


