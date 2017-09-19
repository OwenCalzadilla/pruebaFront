'use strict';

/**
 * @ngdoc function
 * @name app.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the app
 */
angular.module('app')
.controller('UsersCtrl', function ($location, jsonFactory) {

	var usersCtrl = this;

	usersCtrl.init = function () {
		jsonFactory.getUsers()
		.then(function(response){
			usersCtrl.users = response;
		});

	};

	usersCtrl.init();


	usersCtrl.showUser = function (user_id) {
		$location.path('user-info/' + user_id);
	};

  });
