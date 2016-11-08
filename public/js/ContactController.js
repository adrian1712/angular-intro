var app = angular.module ('app');
app.controller ('ContactController',['$scope',
    function($scope) {
          console.log( 'Contact controler has loaded');
          $scope.list = [
            "dot",
            "lynn",
            "pitta"
          ]
    }])
