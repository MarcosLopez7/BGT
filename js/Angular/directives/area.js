/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .directive('area', function () {
            return {
                restrict: 'E',
                templateUrl: '/js/Angular/templates/area.html'
            };
        });
})();