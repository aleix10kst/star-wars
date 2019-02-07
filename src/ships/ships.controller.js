(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService', 'starships'];
    function ShipsController(ShipsService, starships) {
        var vm = this;
        vm.response = {};
        vm.starships = [
            {
                name: 'Halcon milenario'
            }
        ];
        vm.error = undefined;
        initController();

        function initController() {
            vm.response = starships;
        }

        vm.fetchNext = function () {
            fetchData();
        };

        function fetchData() {
            var url = vm.response ? vm.response.next : undefined;
            ShipsService.GetStarships(url).then(function (data) {
                vm.response = data;
            })
            .catch(function () {
                vm.error = true;
                setTimeout(function () {
                    vm.error = false;
                }, 3000)
            })
        }
    }
})();