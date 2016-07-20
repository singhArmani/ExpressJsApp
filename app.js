var express = require('express');

var app = express();

//configuration
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=>{
  res.render('index', {title: 'Hey', message: 'Hello There! Did You See Aman?'});
});

app.listen(3000,() => console.log("listening to the port 3000!"));