'use strict';
var app = angular.module('myApp');
app.controller('studentController', controller);

function controller($scope, $http, studentService) {
    $scope.Student = [];
    $scope.isEdit = false;

    studentService.getAllStudent(function (data) {
        $scope.students = data;
    });

    $scope.funcEdit = function ($index) {
        $scope.isEdit = true;
        $scope.Student = Object.assign({}, $scope.students[$index]);
    };

    $scope.funcDelete = function ($index, id) {
        studentService.funcDelete($index, id).then(function (data) {
            if (data == true) {
                studentService.getAllStudent(function (data) {
                    $scope.students = data;
                });
            }
        });

    };

    $scope.backEdit = function () {
        $scope.isEdit = false;
    };

    $scope.updateEdit = function () {
        studentService.updateStudent($scope.Student).then(function (data) {
            if (data == true) {
                studentService.getAllStudent(function (data) {
                    $scope.students = data;
                });
            }
        });
    };
}
