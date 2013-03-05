var jade = require('jade');

// dom
var compileBtn = document.getElementById('compile');
var input = document.querySelector('.jade-in');
var output = document.querySelector('.jade-out');
var error = document.querySelector('.jade-error');
var options = {
  'pretty' : true
};

compileBtn.addEventListener('click', function(e){
  e.preventDefault();
  // make html
  var fn = jade.compile(input.value, options);
  var html = fn();

  output.value = html;
}, false);