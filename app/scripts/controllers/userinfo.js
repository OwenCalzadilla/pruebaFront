'use strict';

/**
 * @ngdoc function
 * @name app.controller:UserinfoCtrl
 * @description
 * # UserinfoCtrl
 * Controller of the app
 */
angular.module('app')
.controller('UserinfoCtrl', function ($routeParams, $location, jsonFactory) {

	var userinfoCtrl = this;

    userinfoCtrl.init = function () {
    	userinfoCtrl.user_id = $routeParams.user_id;
    	jsonFactory.getUserByID(userinfoCtrl.user_id)
    	.then(function (response) {
    		userinfoCtrl.info = response;
    	});
    };

    userinfoCtrl.init();


    userinfoCtrl.goBack = function () {
		$location.path('');
	};

});
