controllers.controller('HeroesCtrl', function($scope, Heroes) {
  $scope.heroes = Heroes.all();
});

controllers.controller('HeroesDetailCtrl', function($scope, $stateParams, Heroes) {
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.hero = Heroes.get($stateParams.index);
  });

  $scope.$on('$ionicView.afterEnter', function() {
    $scope.viewTitle = $scope.hero.name;
  });
});
