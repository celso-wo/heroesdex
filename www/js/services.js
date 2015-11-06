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

.factory('Battlegrounds', function() {
  var battlegrounds = [
    {name: "Infernal Shrines", description: "A dark, destructive force threatens the Gardens of Hope, creatures made of equal parts mayhem and destruction. Harness their devastating might, or perish at the hands of the Punishers.", image: "img/battlegrounds/bg_infernal-shrines.jpg"},
    {name: "Battlefield of Eternity", description: "Two Immortals are locked in a duel to the death. Help your Immortal prevail, and he’ll devastate your enemy’s forts.", image: "img/battlegrounds/bg_battlefield-of-eternity.jpg"},
    {name: "Tomb of the Spider Queen", description: "Slay your enemies and gather gems of magical power. Bring enough to the Spider Queen’s altar, and her skittering Webweavers will devour your foes.", image: "img/battlegrounds/bg_tomb-of-the-spider-queen.jpg"},
    {name: "Sky Temple", description: "Capture the ancient temples, defeat their guardians, and use their awesome power to destroy your enemy’s forts.", image: "img/battlegrounds/bg_sky-temple.jpg"},
    {name: "Garden of Terror", description: "When night falls, horror sprouts in the Garden of Terror. Kill the terrors, collect their evil seeds, and let your green thumb bring victory!", image: "img/battlegrounds/bg_garden-of-terror.jpg"},
    {name: "Blackheart’s Bay", description: "Collect doubloons and pay the ghost pirate Blackheart to turn his guns on your enemies. If you see a cannonball flying your way… run!", image: "img/battlegrounds/bg_blackhearts-bay.jpg"},
    {name: "Dragon Shire", description: "He who controls the shrines controls the dragon; he who controls the dragon punts the other team’s puny heroes.", image: "img/battlegrounds/bg_dragon-shire.jpg"},
    {name: "Haunted Mines", description: "Engage in necromancy for fun and profit as you collect the skulls of the undead and use them to raise your very own grave golem.", image: "img/battlegrounds/bg_haunted-mines.jpg"},
    {name: "Cursed Hollow", description: "It really is a horrible night to have a curse. Gather the Raven Lord’s tribute and make sure it’s the other team and not yours that has to suffer.", image: "img/battlegrounds/bg_cursed-hollow.jpg"}
  ];

  return {
    all: function() {
      return battlegrounds;
    }
  }
});
