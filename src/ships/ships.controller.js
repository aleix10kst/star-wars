(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = [];
    function ShipsController() {
        var vm = this;

        initController();

        function initController() {
            console.log("Hello world");
        }
    }
})();