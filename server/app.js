var express = require('express');
var app = express();
var portDecision = process.env.PORT || 3000;
var index = require('./routes/index');
var badRequest = require('./routes/bad-request');

app.listen(portDecision, function(){
  console.log('Live on port ', portDecision);
});

app.get('/', index);

app.use(express.static('public'));

app.use('/*', badRequest);
