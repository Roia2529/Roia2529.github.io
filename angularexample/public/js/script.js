
var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http,$window) {
	$scope.link = "http://jsonplaceholder.typicode.com/posts";

    // $http.get($scope.link).then(function(response) {
    //     $scope.names = response.data;
    //     $scope.orderByField = 'userId';
  		// $scope.reverseSort = false;
    // });
    

    $scope.getData = function(){
	    	$http.get($scope.link).then(function(response) {
	    	console.log('getData trigger');	
	        $scope.names = response.data;
	        $scope.orderByField = 'userId';
	  		$scope.reverseSort = false;
	    });
    }
    $scope.getData();
    
    $scope.updateData = function(){
    	if (typeof ($scope.Name) == "undefined" || $scope.Name == "") {
                    $window.alert("Please enter valid JSON data link");
                    return;
        }
        $scope.link = $scope.Name;
        $scope.getData();
    };
});





        
