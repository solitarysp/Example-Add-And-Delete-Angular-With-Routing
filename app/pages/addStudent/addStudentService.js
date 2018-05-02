'use strict';

angular.module("myApp").service("addstudentService", addStudentService);

function addStudentService($http,$q) {
    var service = {

        funcCreate: funcCreate
    };
    return service;
    function funcCreate(student) {
        var deferred = $q.defer();
        $http.post(baseConfig.protocol + baseConfig.server + baseConfig.standardServicePort + baseConfig.baseUrlEnding + "students",student).success(
            function (response) {
                deferred.resolve(response);
            }
        );
        return deferred.promise;
    }
}
