var jade = require('jade');

var data = 'div(class="testing")';

// Compile a function
var fn = jade.compile(data);
var html = fn({name:'Oleg'});
console.log(html);
