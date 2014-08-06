if (Meteor.isClient) {
  // Template.hello.greeting = function () {
  //   return "Welcome to secrets.";
  // };

  // Template.hello.events({
  //   'click input': function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button, Brian");
  //   }
  // });

  // Template.01_letters_tmpl.events({
  //   'click input': function () {
  //     console.log("hello");
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
