// This file isn't tranpile, most use commomJs and ES5


//register babel to tranpile before our tests run.
require('babel-register')();

// Disable webpack feactures that mocha doesn't understand.
require.extensions['.css'] = function() {};
