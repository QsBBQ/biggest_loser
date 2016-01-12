angular.module("myControllers", [])
.controller("myController", function($scope) {
  $scope.contestants = [{
    name: "Bob Hope",
    height: "5\'8\"",
    weight: 220,
    begfatPercentage: 20,
    endfatPercentage: 0,
    percentageLoss: 0
  },{
    name: "Bob Chin",
    height: "5\'6\"",
    weight: 160,
    begfatPercentage: 15,
    endfatPercentage: 0,
    percentageLoss: 0
  },{
    name: "Batman",
    height: "6\'1\"",
    weight: 225,
    begfatPercentage: 8,
    endfatPercentage: 0,
    percentageLoss: 0
  }];
  $scope.test = "Blah!"

})
