(function () {

    'use strict';

    var routeProvider = function ($routeProvider) {

        var viewBase = '/app/components/';
        var viewBaseCommon = '/app/common/';

        // Client
        $routeProvider.when('/', {
            controller: 'indexController',
            templateUrl: viewBase + 'index.html',
            controllerAs: 'vm'
        })
            .when('/aboutUs', {
                controller: 'aboutUsController',
                templateUrl: viewBase + 'aboutUs/aboutUs.html',
                controllerAs: 'vm'
            })
            .when('/service', {
                controller: 'serviceController',
                templateUrl: viewBase + 'service/service.html',
                controllerAs: 'vm'
            })
            .when('/contact', {
                controller: 'contactController',
                templateUrl: viewBase + 'contact/contact.html',
                controllerAs: 'vm'
            })
                .when('/appointment', {
                    controller: 'appointmentController',
                    templateUrl: viewBase + 'appointement/appointment.html',
                    controllerAs: 'vm'
                })
            .otherwise({
                redirectTo: '/404'
            });
    }
    angular.module('NPO').config(['$routeProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', ];
}());
