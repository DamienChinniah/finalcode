/**
 * Created by User on 5/10/2017.
 */

angular.module('myApp').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when("/", {
                templateUrl : "Register.html",
            controller: 'studentController'
            })
            .when('/view', {
            templateUrl: 'view.html',

                controller: 'studentController'
        }).otherwise({
            redirectTo: 'register.html',
            controller: 'studentController'
        });

        // $locationProvider.html5Mode(true);
    }]);

