(function () {

    'use strict';

    function StarshipsListController($scope) {
        var ctrl = this;
    }

    angular
    .module('app')
    .component('starshipsList', {
        controller: StarshipsListController,
        templateUrl: './ships/starships-list/starships-list.component.html',
        bindings: {
            starships: '<'
        }
    })
})();