angular.module('starter.controllers', [])

.controller('BMIController', function ($scope) {
  $scope.data= {};
  $scope.data.toggle = false;
  $scope.calculateBMI = function () {
    var person = new Person({
        toggle: $scope.data.toggle,
        weight: $scope.data.weight,
        height: $scope.data.height
    });
    console.log(person);
    person.calculate_bmi();
    $scope.person = person;
    console.log(person);
  };
})

.controller('AboutController', function () {

});
