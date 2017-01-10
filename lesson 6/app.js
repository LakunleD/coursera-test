(function () {
	'use strict';

	angular.module('NameCalculator',[]).controller('NameCalculatorController', function($scope){
		$scope.name = "";
		$scope.totalValue = 0;

		$scope.displayNumeric = function () {
			var totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue;
		};

		function calculateNumericForString(currentVal) {
			var totalStringValue = 0;
			for (var i =0; i < currentVal.length; i++) {
				totalStringValue += currentVal.charCodeAt(i);
			}
			return totalStringValue;
		}


	});
})();

