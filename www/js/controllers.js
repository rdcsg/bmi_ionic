angular.module('starter.controllers', [])

.controller('BMIController', function ($scope) {
  $scope.data= {};
  $scope.data.toggle = false;
  $scope.$on("$ionicView.loaded", function(){ // onLoad of the view, initiate the placeholder values
    $scope.setMeasurementUnit();
  });
  $scope.updateToggleValues = function (){ // on switch toggle, replace measurement units
    $scope.setMeasurementUnit();
    if ( ( $scope.data.weight !== undefined ) || ( $scope.data.height !== undefined ) ) { // re-calculate the bmi when toggle is switched unless it's a view init
      $scope.calculateBMI();
    }
  };

  $scope.setMeasurementUnit = function (){
    switch ($scope.data.toggle) {
      case false:
        $scope.units = {
          weight: "kg",
          height: "cm"
        };
        break;
      case true:
        $scope.units = {
          weight: "lbs",
          height: "inches"
        };
    }
    $scope.placeholder = {
      weight: "Weight in " + $scope.units.weight,
      height: "Height in " + $scope.units.height
    };
  };

  $scope.calculateBMI = function () {
    var person = new Person({
        toggle: $scope.data.toggle,
        weight: $scope.data.weight,
        height: $scope.data.height
    });
    person.calculate_bmi();
    $scope.person = person;
  };
})

.controller('AboutController', function () {

});
