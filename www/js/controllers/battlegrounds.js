controllers.controller('BattlegroundsCtrl', function($scope, Battlegrounds) {
  $scope.battlegrounds = Battlegrounds.all();
});
