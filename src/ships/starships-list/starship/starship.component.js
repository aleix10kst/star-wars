(function () {

    'use strict';

    function StarshipController() {
        var ctrl = this;
    }

    angular
        .module('app')
        .component('starship', {
            controller: StarshipController,
            templateUrl: './ships/starships-list/starship/starship.component.html',
            bindings: {
                starship: '<',
            }
        })
})();