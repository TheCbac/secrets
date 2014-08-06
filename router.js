Router.map(function(){
	this.route('home',{
		path:'/',
		template:"01_letters_tmpl"
	});

	this.route('01a_lettersHint_link',{
		path:'/01a_lettersHint',
		template:'01a_lettersClue_tmpl'
	});

	this.route('02_comments_link',{
		path:'/comments',
		template:'02_comments_tmpl'
	});
});