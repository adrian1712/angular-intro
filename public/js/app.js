console.log("Hello World");
// create angular application
var app=angular.module ('app'
//  this is the name of the application/ module
,
// specify the dependency
// ?for this app to run

// Specify that we wnt to include the anguler ui
// router for the page navigation
['ui.router']
);
//  set up the app module
app.config (
  // specify the dependency ojects to pull
  // ?into the configuration.
  [
    '$stateProvider',
    // CAll back method to run for the configuration.
    function ($stateProvider) {

      // Our stated provider control what page
      // or what "state" or app is in
      $stateProvider
      .state ('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .state ('about', {
        url: '/about',
        // template: 'Hi all this is test'
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })
      .state ('contact', {
        url: '/contact',
        // template: 'Hi all this is funny test'
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })

  }
  ]);
