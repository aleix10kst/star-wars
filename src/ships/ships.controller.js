(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService'];
    function ShipsController(ShipsService) {
        var vm = this;
        vm.starships = [
            {
                name: 'Halcon milenario'
            }
        ];
        initController();

        function initController() {
            ShipsService.GetStarships().then(function (data) {})
            .catch(function (error) {
                console.error(error);
            });
        }
    }
})();