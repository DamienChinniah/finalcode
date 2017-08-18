var app = angular.module('myApp');

app.controller('studentController',
    function ($scope ,$routeParams,$location,studentService){

        console.log("Started");

        function getStudentDetails(){

            studentService.get().then(students => {
                $scope.students = students;
            }).catch(err=>{
                console.error(err);
            });
        }

        getStudentDetails();

        $scope.getStudents=()=>{

            studentService.get().then(students => {
                $scope.students = students;
            }).catch(err=>{
                console.error(err);
            });
        }

        $scope.goToAdd=(student)=>{

            $scope.addVisible=true
            $scope.editVisible=false;
            $scope.students = {};
        }

        $scope.addEditStudent=(ids)=>{

            console.log(ids);

            opdService.getByID($routeParams.id).then(students => {
                console.log($routeParams.id);
                $scope.students = students;
                $location.path('/');

                $scope.addVisible=true;
                $scope.editVisible=true;
            }).catch(err=>{
                console.error(err);
            });

        }

        $scope.addStudent = (student) => {

            opdService.post(student);
            console.log("Success");
        }

    });
