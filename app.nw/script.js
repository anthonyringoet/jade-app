var jade = require('jade');

var app = {
  init : function(){
    this.dom = {};
    this.dom.compileBtn = document.getElementById('compile');
    this.dom.clearBtn = document.getElementById('clear');
    this.dom.resetBtn = document.getElementById('reset');
    this.dom.autoCompile = document.getElementById('autocompile');
    this.dom.input = document.querySelector('.jade-in');
    this.dom.output = document.querySelector('.jade-out');
    this.dom.error = document.querySelector('.jade-error');
    this.options = {
      'pretty' : true
    };

    // render default
    app.compile();

    // event handlers
    app.dom.compileBtn.addEventListener('click', function(e){
      e.preventDefault();
      app.compile();
    }, false);

    app.dom.clearBtn.addEventListener('click', function(e){
      e.preventDefault();
      app.dom.input.value = '';
      app.compile();
    }, false);

    app.dom.resetBtn.addEventListener('click', function(e){
      e.preventDefault();
      window.location.reload();
    }, false);

    app.dom.input.addEventListener('input', function(e){
      if(app.dom.autoCompile.checked){
        app.compile();
      }
    });
  },

  compile : function(){
    var fn = jade.compile(app.dom.input.value, app.options);
    var html = fn();

    app.dom.output.value = html;
  }
};

app.init();