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
            } else {
                return $http.get(url, {
                    headers: {
                        'Authorization': 'none',
                        'access-control-allow-origin': '*'
                    }
                }).then(handleSuccess)
            }
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

    }
})();