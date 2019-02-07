(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService'];
    function ShipsController(ShipsService) {
        var vm = this;
        vm.response = {};
        vm.starships = [
            {
                name: 'Halcon milenario'
            }
        ];
        initController();

        function initController() {
            fetchData();
        }

        vm.fetchNext = function () {
            fetchData();
        };

        function fetchData() {
            var url = vm.response ? vm.response.next : undefined;
            ShipsService.GetStarships(url).then(function (data) {
                vm.response = data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
})();