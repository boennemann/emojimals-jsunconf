var animalToEmoji = require('./animal-to-emoji.json')
var soundToAnimals = require('./sound-to-animals.json')

var sounds = Object.keys(soundToAnimals)

module.exports = function (input) {
  if (!~sounds.indexOf(input)) return 'NOPE 🐙  NOPE 🐙  NOPE 🐙'

  return (soundToAnimals[input].map(function (animal) {
    return animalToEmoji[animal]
  }).join(' '))
}
