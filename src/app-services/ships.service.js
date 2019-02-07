(function () {

    angular
        .module('app')
        .factory('ShipsService', ShipsService);

    ShipsService.$inject = ['$http'];
    function ShipsService($http) {
        var service = {};

        service.Hello = Hello;

        return service;

        function Hello() {
            console.log("Hello from the service");
        }
    }
})();