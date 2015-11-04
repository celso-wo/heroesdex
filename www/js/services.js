angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Heroes', function() {
  var heroes = [

    {name: "Abathur", title: "Evolution Master", image: "img/heroes/abathur.jpg"},
    {name: "Anub'arak", title: "Traitor King", image: "img/heroes/anubarak.jpg"},
    {name: "Artanis", title: "Hierarch of the Daelaam", image: "img/heroes/artanis.jpg"},
    {name: "Arthas", title: "The Lich King", image: "img/heroes/arthas.jpg"},
    {name: "Azmodan", title: "Lord of Sin", image: "img/heroes/azmodan.jpg"},
    {name: "Brightwing", title: "Faerie Dragon", image: "img/heroes/brightwing.jpg"},
    {name: "Chen", title: "Legendary Brewmaster", image: "img/heroes/chen.jpg"},
    {name: "Diablo", title: "Lord of Terror", image: "img/heroes/diablo.jpg"},
    {name: "E.T.C.", title: "Rock God", image: "img/heroes/etc.jpg"},
    {name: "Falstad", title: "Wildhammer Thane", image: "img/heroes/falstad.jpg"},
    {name: "Gazlowe", title: "Boss of Ratchet", image: "img/heroes/gazlowe.jpg"},
    {name: "Illidan", title: "The Betrayer", image: "img/heroes/illidan.jpg"},
    {name: "Jaina", title: "Archmage", image: "img/heroes/jaina.jpg"},
    {name: "Johanna", title: "Crusader of Zakarum", image: "img/heroes/johanna.jpg"},
    {name: "Kael'thas", title: "The Sun King", image: "img/heroes/kaelthas.jpg"},
    {name: "Kerrigan", title: "Queen of Blades", image: "img/heroes/kerrigan.jpg"},
    {name: "Kharazim", title: "Veradani Monk", image: "img/heroes/kharazim.jpg"},
    {name: "Leoric", title: "The Skeleton King", image: "img/heroes/leoric.jpg"},
    {name: "Li Li", title: "World Wanderer", image: "img/heroes/lili.jpg"},
    {name: "Lt. Morales", title: "Combat Medic", image: "img/heroes/lt-morales.jpg"},
    {name: "Malfurion", title: "Archdruid", image: "img/heroes/malfurion.jpg"},
    {name: "Muradin", title: "Mountain King", image: "img/heroes/muradin.jpg"},
    {name: "Murky", title: "Baby Murloc", image: "img/heroes/murky.jpg"},
    {name: "Nazeebo", title: "Heretic Witch Doctor", image: "img/heroes/nazeebo.jpg"},
    {name: "Nova", title: "Dominion Ghost", image: "img/heroes/nova.jpg"},
    {name: "Raynor", title: "Renegade Commander", image: "img/heroes/raynor.jpg"},
    {name: "Rehgar", title: "Shaman of the Earthen Ring", image: "img/heroes/rehgar.jpg"},
    {name: "Rexxar", title: "Champion of the Horde", image: "img/heroes/rexxar.jpg"},
    {name: "Sgt. Hammer", title: "Siege Tank Operator", image: "img/heroes/sgt-hammer.jpg"},
    {name: "Sonya", title: "Wandering Barbarian", image: "img/heroes/sonya.jpg"},
    {name: "Stitches", title: "Terror of Darkshire", image: "img/heroes/stitches.jpg"},
    {name: "Sylvanas", title: "The Banshee Queen", image: "img/heroes/sylvanas.jpg"},
    {name: "Tassadar", title: "Savior of the Templar", image: "img/heroes/tassadar.jpg"},
    {name: "The Butcher", title: "Flesh Carver", image: "img/heroes/the-butcher.jpg"},
    {name: "The Lost Vikings", title: "Triple Trouble", image: "img/heroes/the-lost-vikings.jpg"},
    {name: "Thrall", title: "Warchief of the Horde", image: "img/heroes/thrall.jpg"},
    {name: "Tychus", title: "Notorious Outlaw", image: "img/heroes/tychus.jpg"},
    {name: "Tyrael", title: "Archangel of Justice", image: "img/heroes/tyrael.jpg"},
    {name: "Tyrande", title: "High Priestess of Elune", image: "img/heroes/tyrande.jpg"},
    {name: "Uther", title: "The Lightbringer", image: "img/heroes/uther.jpg"},
    {name: "Valla", title: "Demon Hunter", image: "img/heroes/valla.jpg"},
    {name: "Zagara", title: "Broodmother of the Swarm", image: "img/heroes/zagara.jpg"},
    {name: "Zeratul", title: "Dark Prelate", image: "img/heroes/zeratul.jpg"}
  ];

  return {
    all: function() {
      return heroes;
    }
  };
});
