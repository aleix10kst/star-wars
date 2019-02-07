(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService'];
    function ShipsController(ShipsService) {
        var vm = this;

        initController();

        function initController() {
            ShipsService.Hello();
        }
    }
})();