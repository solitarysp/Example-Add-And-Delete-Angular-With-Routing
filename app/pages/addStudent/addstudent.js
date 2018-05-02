'use strict';
var app = angular.module('myApp');
app.controller('addstudentController', function ($scope, addstudentService, $location) {
    $scope.funcCreate = function () {
        addstudentService.funcCreate($scope.student).then(function (data) {
            if(data==true){
                $location.path("/student");
            }else {
                $scope.msg = "có lỗi vui lòng check lại";
            }

        });
    }

});