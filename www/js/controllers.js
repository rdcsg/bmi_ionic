angular.module('starter.controllers', [])

.controller('CalculatorController', function ($scope) {
  $scope.data= {};
  $scope.calculateBMI = function () {
    var  person = new Person({
        weight: $scope.data.weight,
        height: $scope.data.height
    });
    person.calculate_bmi_met();
    $scope.person = person;
  };
});

.controller('AboutController', function () {

})
