'use strict';

angular.module('myApp', ['ngRoute', 'myApp.version','angularUtils.directives.dirPagination']).config(function ($routeProvider) {

    $routeProvider
        .when('/student', {
            templateUrl: 'pages/student/student.html',
            controller: 'studentController',
        })
        .when('/addstudent', {
            templateUrl: 'pages/addStudent/addstudent.html',
            controller: 'addstudentController',
        })
        .otherwise({redirectTo: '/student'});

});

