var testObjects = function() {
  var self = this;
  self.events = [

    {
      'id': 116,
      'title': 'Acts of Vengeance!',
      'decription': 'Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.',
      'start': '1989-12-10 00:00:00',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b.jpg',
      'characterIDs': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      'comics': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    {
      'id': 87,
      'title': 'Civil War',
      'decription': 'After a horrific tragedy raises questions on whether or not super heroes should register with the government, longtime Avengers teammates Captain America and Iron Man end up on opposite sides of the argument! Writer Mark Millar and artist Steve McNiven split the Marvel Universe in two as friend fights friend in one of the most celebrated and successful events of all-time!',
      'start': '1999-04-10 00:00:00',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/51cb5356c2063',
      'characterIDs': [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      'comics': [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  ];
  self.characters = [
    {
      'id': 1,
      'name': 'Fight Guy',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 2,
      'name': 'Other Man',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 3,
      'name': 'Captain Hair',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 4,
      'name': 'She-bird',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 5,
      'name': 'Otterman',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 6,
      'name': 'Different-Door Man',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 7,
      'name': 'The Rattler',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 8,
      'name': 'Confusitron',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 9,
      'name': 'Worldender',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 10,
      'name': 'Optimus Effing Prime',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 11,
      'name': 'Whale-man',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 12,
      'name': 'Buffalo-Girl',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 13,
      'name': 'The Chef',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 14,
      'name': 'Cactus-Tamer',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 15,
      'name': 'Steel Savior',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 16,
      'name': 'The Whisp',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 17,
      'name': 'The Taco',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 18,
      'name': 'Little Bubbles Man',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 19,
      'name': 'Spikr',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      'id': 20,
      'name': 'Dr. Wat',
      'decription': 'This character is not well-known enough to warrant a description!',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    }
  ];
  self.comics = [
    {
      'id': 1,
      'title': 'Storm (2006)',
      'decription': 'The epic, untold love story between Marvels two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who will stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Dont miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 2,
      'title': 'Comic 2',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 3,
      'title': 'Comic 3',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 4,
      'title': 'Comic 4',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 5,
      'title': 'Comic 5, Issue 1',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 6,
      'title': 'Comic 5, issue 2',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 7,
      'title': 'Comic 5, Issue 3',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 8,
      'title': 'Comic 5, The Conclusion',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 9,
      'title': 'Comic 6',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 10,
      'title': 'Comic 7',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 11,
      'title': 'Comic XXVI',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 12,
      'title': 'Comic XXVII',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 13,
      'title': 'Comic XXVIII',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 14,
      'title': 'Comic XXIX',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 15,
      'title': 'Comic XXXI',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 16,
      'title': 'Doomseer Part 1',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 17,
      'title': 'Doomseer Part 2',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 18,
      'title': 'Doomseer Part 3',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 19,
      'title': 'Doomseer Part 4',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    },
    {
      'id': 20,
      'title': 'Doomseer Part 5',
      'decription': 'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description.',
      'imgPath': 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg'
    }
  ];
}

module.exports = testObjects;
