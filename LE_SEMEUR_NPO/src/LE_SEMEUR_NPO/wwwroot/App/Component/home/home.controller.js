(function () {
    'use strict';


    function home($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'home';

        init();

        function init() { }
    }

    angular.module('NPO').controller('home', home);
    home.$inject = ['$location'];
})();
