//
var app = angular.module ('app');
app.controller (
//name of controller
'HomeController',
// dependency for controller
[
      '$scope',
  // controller callback function
    function($scope) {
          console.log( 'home controler has loaded');

          $scope.title = 'Home Bob';
          $scope.list = [
            'Sarah',
            'Jay',
            'Sam',
          ]
          $scope.testMethod = function () {
            console.log ('Test fired method.');
          }
    }
]

)
