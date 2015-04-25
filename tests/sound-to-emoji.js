var test = require('tape')

var soundToEmojis = require('../')

test(function (t) {
  t.plan(3)

  t.ok(/🐈/.test(soundToEmojis('hiss')), 'cats hiss')
  t.ok(!/🐛/.test(soundToEmojis('hiss')), 'bugs don\'t hiss')
  t.is(soundToEmojis('yo'), null, 'yo is not an animal sound')
})
