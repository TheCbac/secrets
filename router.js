Router.map(function(){
	this.route('home',{
		path:'/',
		template:"welcomeMessage"
	});

	this.route('comments',{
		path:'/comments',
		template:'commentsTemp'
	});
});