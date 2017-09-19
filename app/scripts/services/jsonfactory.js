'use strict';

/**
 * @ngdoc service
 * @name app.jsonFactory
 * @description
 * # jsonFactory
 * Factory in the app.
 */
angular.module('app')
.factory('jsonFactory', function ($http) {

    var path = 'json/';
    var file_name = path + 'users.json';

    return {


        getUsers: function () {
            return $http.get(file_name)
            .then(
                function (response) {
                    return response.data.users;
                },
                function (error) {
                    alert("ERROR:: " + error.data);
                    return false;
                }
            );
        },

        getUserByID: function (user_id) {
            return $http.get(path + user_id + '.json')
            .then(
                function (response) {
                    return response.data.data;
                },
                function (error) {
                    alert("ERROR:: " + error.data);
                    return false;
                }
            );
        }


    };
});

