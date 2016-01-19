angular.module("myControllers", [])
.controller("myController", function($scope) {
  $scope.name = "";
  $scope.height = "";
  $scope.weight = "";
  $scope.begBodyFat = 0;
  $scope.endBodyFat = 0;
  $scope.sortType = "name";
  $scope.sortReverse = false;
  $scope.searchContestant = "";
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
  $scope.test = "2016"
  $scope.editContestant = function(contestant) {
    // console.log(contestant.name)
  }
  $scope.addContestant = function() {
    // console.log($scope.name)
    $scope.contestants.push({
      name: $scope.name,
      height: $scope.height,
      weight: $scope.weight,
      begfatPercentage: $scope.begBodyFat,
      endfatPercentage: $scope.endBodyFat
    })
  }
  $scope.deleteContestant = function() {

  }
})
