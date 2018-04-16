
var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http,$window) {
	$scope.link = "https://jsonplaceholder.typicode.com/posts";

    $scope.getData = function(){
	    	$http.get($scope.link).then(function(response) {
	    	//console.log('getData trigger');
	    	if(typeof(response)=="undefined"){
	    		$window.alert("Fail to get JSON data.");
                    return;
	    	}	
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
        else if($scope.Name.indexOf('https://') != 0){
        	$window.alert("Please enter link starting with https");
            return;
        }
        $scope.link = $scope.Name;
        $scope.getData();
    };
});





        
