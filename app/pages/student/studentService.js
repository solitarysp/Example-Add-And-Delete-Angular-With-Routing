'use strict';

angular.module("myApp").service("studentService", StudentService);

function StudentService($http,$q) {
    var service = {
        updateStudent: updateStudent,
        getAllStudent: getAllStudent,
        funcDelete: funcDelete
    };

    return service;

    function updateStudent(Student) {
        var deferred = $q.defer();
        $http.put(baseConfig.protocol + baseConfig.server + baseConfig.standardServicePort + baseConfig.baseUrlEnding + "students", Student).success(
            function (response) {
                deferred.resolve(response);
            }
        );
        return deferred.promise;
    }

    function getAllStudent(successCallback) {
        $http.get(baseConfig.protocol + baseConfig.server + baseConfig.standardServicePort + baseConfig.baseUrlEnding + "students").success(
            function (response) {
                successCallback(response);
            }
        );
    }

    function funcDelete(index, id) {
        var deferred = $q.defer();
        $http.delete(baseConfig.protocol + baseConfig.server + baseConfig.standardServicePort + baseConfig.baseUrlEnding + "students/" + id).success(
            function (response) {
                deferred.resolve(response);
            }
        );
        return deferred.promise;
    }
}
