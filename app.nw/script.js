var jade = require('jade');

// dom
var compileBtn = document.getElementById('compile');
var input = document.querySelector('.jade-in');
var output = document.querySelector('.jade-out');

document.addEventListener('click', function(e){
  e.preventDefault();

  // make html
  var fn = jade.compile(input.value);
  var html = fn();

  output.value = html;
}, false);