
var jsondata;
var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/posts").then(function(response) {
        //jsondata = response.data;
        $scope.names = response.data;
        $scope.orderByField = 'userId';
  		$scope.reverseSort = false;
    });
});





        
