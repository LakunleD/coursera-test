(function() {

	'use strict';

	 angular.module('CheckLunchApp', [])

	 .controller('CheckLunchAppController', CheckLunchAppController);

	 CheckLunchAppController.$inject = ['$scope'];





	function CheckLunchAppController($scope) {
		$scope.food = "";
		$scope.message = "";

		$scope.checkFood = function (food) {

			var arr = food.split(",");
			if (arr.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}		
		}
	}





})();