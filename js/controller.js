angular.module("myControllers", [])
.controller("myController", function($scope) {
  $scope.editData = false;
  $scope.name = "";
  $scope.height = "";
  $scope.weight = 0;
  $scope.begBodyFat = 0;
  $scope.endBodyFat = 0;
  $scope.sortType = "name";
  $scope.sortReverse = false;
  $scope.searchContestant = "";
  startCounter = 3
  $scope.id = function() {
    startCounter = startCounter+1
    // console.log(startCounter)
    return startCounter
  };
  var contest ={}
  $scope.contestants = [{
    id: 1,
    editData: false,
    name: "Bob Hope",
    height: "5\'8\"",
    weight: 220,
    begfatPercentage: 20,
    endfatPercentage: 0,
    percentageLoss: 0
  },{
    id: 2,
    editData: false,
    name: "Albert Einsten",
    height: "5\'6\"",
    weight: 160,
    begfatPercentage: 15,
    endfatPercentage: 0,
    percentageLoss: 0
  },{
    id: 3,
    editData: false,
    name: "Batman",
    height: "6\'1\"",
    weight: 225,
    begfatPercentage: 8,
    endfatPercentage: 0,
    percentageLoss: 0
  }];
  $scope.test = "2016";
  var contestantBackups= {};

  $scope.editContestant = function(contestant) {
    // console.log(contestant.name)
    contestantBackups[contestant.id] = angular.copy(contestant);
    contestant.editData = true;
  }
  $scope.addContestant = function() {
    // console.log($scope.id())
    $scope.contestants.push({
      id: $scope.id(),
      editData: false,
      name: $scope.name,
      height: $scope.height,
      weight: $scope.weight,
      begfatPercentage: $scope.begBodyFat,
      endfatPercentage: $scope.endBodyFat
    })
    console.log($scope.contestants)
  }
  $scope.deleteContestant = function(myidx, contestant) {
    // console.log(idx)
    // $scope.contestants.splice(myidx, 1)
    for (i=0; i< $scope.contestants.length; i++) {
      if ($scope.contestants[i].id == contestant.id) {
          $scope.contestants.splice(i, 1)
      }
    }
  }
  $scope.cancelEdit = function(idx, contestant) {
    // $scope.contestants[idx] = contestantBackups[contestant.id]
    for (i=0; i< $scope.contestants.length; i++) {
      if ($scope.contestants[i].id == contestant.id) {
          $scope.contestants[i]=contestantBackups[contestant.id]
      }
    }
  }
  $scope.saveEdit = function(idx, contestant) {
    contestant.editData = false

  }
})
