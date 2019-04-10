var myMovieApp = angular.module('myMovieApp', []);

myMovieApp.controller('moviesCtrl', function($scope, $rootScope, callApi){
	var vm = this;

	vm.search = function(){
		$scope.promise = callApi.getMovie();

		$scope.promise.then(function(result){
			vm.infos=result;
		});
	};
});

myMovieApp.service('callApi', ['$http', function($http, $scope){
	var vm = this;

	vm.getMovie = function() {
		var req = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/550?api_key=cdae4e177549fd7fa6ea0fe4d25f8ef0'
		};
		return $http(req).then(function(result){
			return result.data;
		}).catch(function(){
			throw 'API KO';
		});
	}
}]);