controllers.controller('HeroesCtrl', function($scope, Heroes) {
  $scope.heroes = Heroes.all();
});

controllers.controller('HeroesDetailCtrl', function($scope, $stateParams, Heroes) {
  $scope.hero = Heroes.get($stateParams.heroSlug);
});
