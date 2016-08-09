angular.module('starter.controllers', [])

.controller('BMIController', function ($scope) {
  $scope.data= {};
  $scope.data.toggle = false;
  /*$scope.$on("$ionicView.loaded", function(){ //initiate the placeholder values
    setMeasurementUnit();
    console.log("State Params: ", data.stateParams);
  });*/
  $scope.units = {   //initiate the placeholder values
    weight: "kg",
    height: "cm"
  };
  $scope.placeholder = {    //initiate the placeholder values
    weight: "Weight in " + $scope.units.weight,
    height: "Height in " + $scope.units.height
  };
  $scope.setMeasurementUnit = function () {
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
    // re-calculate the bmi when toggle is switched unless it's a page init
    if ( $scope.units.weight !== "" && $scope.units.height !== "") {
      calculateBMI();
    }
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
