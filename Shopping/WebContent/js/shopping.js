var shopping = angular.module('shopping', []);
shopping.controller('userCadastreControl', function($scope, $http,$location) {
	$scope.user = {};
	$scope.produto = {};
	$scope.servico={};
	$scope.listProduct = [];
	$scope.showList = true;
	$scope.showDetail = false;
	$scope.user = undefined;
	$scope.passoUM =true;
	$scope.telaProduct = false;
	$scope.telaServico = false;
	$scope.telaImovel = false;
	$scope.telaVeiculo = false;
	$scope.telaOther = false;
	
	function serializeData(data) {
		// If this is not an object, defer to native stringification.
		if (!angular.isObject(data)) {
			return ((data == null) ? "" : data.toString());
		}

		var buffer = [];

		// Serialize each key in the object.
		for ( var name in data) {
			if (!data.hasOwnProperty(name)) {
				continue;
			}

			var value = data[name];

			buffer.push(encodeURIComponent(name) + "="
					+ encodeURIComponent((value == null) ? "" : value));
		}

		// Serialize the buffer and clean it up for transportation.
		var source = buffer.join("&").replace(/%20/g, "+");
		return (source);
	}
	;

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
			alert("Erro" + status);
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
			alert("Erro" + status);
		});
	};
	$scope.listProducts = function() {

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

	$scope.logar = function() {

		$http({
			method : 'POST',
			url : 'login',
			data : serializeData($scope.user),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			 $scope.user=data;
		}).error(function(data, status, headers, config) {
			alert("Login inválido!");
		});
	};

	$scope.listProducts();
	
	
	
	$scope.isLogado = function() {
		if($scope.user != undefined){
			return true;
		}else{
			return false;
			
		}
		}
		
	$scope.btnCadastrarProd= function() {
		if ($scope.isLogado()) {
			window.location='cadastroProduto.html';
		}else{
			window.location='login.html';
		}
	}
	$scope.segundoPasso= function(opcao) {
		$scope.passoUM = false;
		switch (opcao) {
		case 1:
			$scope.telaProduct = true;
			break;
		case 2:
			$scope.telaServico = true;
		default:
			break;
		}
		
	}
	
	$scope.cadastrarServico = function() {
		
		$http({
			method : 'POST',
			url : 'cadastrarServico',
			data : serializeData($scope.servico),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			alert("Serviço cadastrado com sucesso");
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Erro");
			alert("Erro" + status);
		});
	}
	
	$scope.cadastrarVeiculo = function() {
			
			$http({
				method : 'POST',
				url : 'cadastrarAutomobile',
				data : serializeData($scope.veiculo),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).success(function(data, status, headers, config) {
				alert("Veículo cadastrado com sucesso");
			}).error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log("Erro");
				alert("Erro" + status);
			});
		}
	
	$scope.cadastrarImovel = function() {
		
		$http({
			method : 'POST',
			url : 'cadastrarBuilding',
			data : serializeData($scope.imovel),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			alert("Imóvel cadastrado com sucesso");
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Erro");
			alert("Erro" + status);
		});
	}
	
$scope.cadastrarOutro = function() {
		
		$http({
			method : 'POST',
			url : 'cadastrarOther',
			data : serializeData($scope.outro),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(data, status, headers, config) {
			alert("Produto cadastrado com sucesso");
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Erro");
			alert("Erro" + status);
		});
	}
});
