var test = require('tape')

var soundToEmojis = require('../')

test(function (t) {
  t.plan(2)

  t.ok(/🐈/.test(soundToEmojis('hiss')), 'cats hiss')
  t.is(soundToEmojis('yo'), null, 'yo is not an animal sound')
})
