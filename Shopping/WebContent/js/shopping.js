var shopping = angular.module('shopping', []);
shopping.controller('userCadastreControl', function ($scope,$http) {
	$scope.user={};
	
	
	
	$scope.cadastrar= function(){
		
		$http( {method:'POST',
			url:'cadastrarUser',
			data: $.param($scope.user),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
		).success(function(data, status, headers, config) {
		    console.log("sucess");
		  }).error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
			  console.log("Erro");
		  });
		
	
	};
});