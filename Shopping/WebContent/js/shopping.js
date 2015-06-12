var shopping = angular.module('shopping', []);
shopping.controller('userCadastreControl', function($scope, $http) {
	$scope.user = {};
	$scope.produto={};
	$scope.listProduct=[];
	$scope.showList=true;
	$scope.showDetail=false;
	function serializeData( data ) { 
	    // If this is not an object, defer to native stringification.
	    if ( ! angular.isObject( data ) ) { 
	        return( ( data == null ) ? "" : data.toString() ); 
	    }

	    var buffer = [];

	    // Serialize each key in the object.
	    for ( var name in data ) { 
	        if ( ! data.hasOwnProperty( name ) ) { 
	            continue; 
	        }

	        var value = data[ name ];

	        buffer.push(
	            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
	        ); 
	    }

	    // Serialize the buffer and clean it up for transportation.
	    var source = buffer.join( "&" ).replace( /%20/g, "+" ); 
	    return( source ); 
	};
	
	$scope.cadastrar = function() {

		$http({
			method : 'POST',
			url : 'cadastrarUser',
			data : serializeData($scope.user),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			console.log("sucess");
			alert("Produto cadastrado com sucesso");
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Erro");
			alert("Erro"+ status);
		});
	};

	$scope.cadastrarProduct = function() {

		$http({
			method : 'POST',
			url : 'cadastrarProduto',
			data : serializeData($scope.produto),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			console.log("sucess");
			alert("Produto cadastrado com sucesso");
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Erro");
			alert("Erro"+ status);
		});
	};
	$scope.listProduct= function(){
		
		$http({
			method : 'GET',
			url : 'listarProdutos',
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			$scope.listProduct = data;
		}).error(function(data, status, headers, config) {
			console.log("Erro");
		});
	};
	$scope.listProduct();
	
});