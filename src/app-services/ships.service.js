(function () {

    'use strict';

    angular
        .module('app')
        .factory('ShipsService', ShipsService);

    ShipsService.$inject = ['$http'];
    function ShipsService($http) {
        var service = {};

        service.GetStarships = GetStarships;

        return service;

        function GetStarships(url) {
            if (!url) {
                return $http.get('https://swapi.co/api/starships/', {
                    headers: {
                        'Authorization': 'none',
                        'access-control-allow-origin': '*'
                    }
                }).then(handleSuccess)
                  .catch(handleError)
            } else {
                return $http.get(url, {
                    headers: {
                        'Authorization': 'none',
                        'access-control-allow-origin': '*'
                    }
                }).then(handleSuccess)
                    .catch(handleError)
            }
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { error: error}
            }
        }

    }
})();