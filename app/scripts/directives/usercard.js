'use strict';

/**
 * @ngdoc directive
 * @name app.directive:userCard
 * @description
 * # userCard
 */
angular.module('app')
.directive('userCard', function () {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'views/usercard_directive.html'
	};
  });
