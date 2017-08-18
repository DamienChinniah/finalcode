var app = angular.module('myApp')

app.factory('studentService',
    function($http){
        return {

            get: () => $http.get('/student').then(response => response.data),
            post: (patient) => $http.post('/student', patient).then(response => response.data),
            getByID: (id) => $http.get('/student'+id).then(response => response.data)
        };
    });
