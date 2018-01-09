(function () {
    'use strict';

    var app = angular.module('NPO', ['ngRoute', 'ngStorage', 'angular-loading-bar', 'toastr', 'angular-nicescroll']);
    app.constant('baseUrl', 'api');

    app.run(function ($rootScope, $location, $sessionStorage, $timeout) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.currentUrl = $location.path();
        });
    });

}());