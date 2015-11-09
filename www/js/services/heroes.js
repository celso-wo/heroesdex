services.factory('Heroes', function() {
  return {
    all: function() {
      return heroes;
    },
    get: function(index) {
      return heroes[index];
    },
    getBySlug: function(slug) {
      var result = heroes.filter(function(hero) {
        if (hero.slug == slug) {
          return hero;
        }
      });

      return result.length == 1 ? result[0] : null;
    }
  };
});
