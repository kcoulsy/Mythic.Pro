const express = require('express');
const path = require('path');
const hbs = require('hbs');

const {antorus,mplus} = require('./data');
const {createValidUrl} = require('./public/js/scripts')

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap



var types = ['antorus', 'mplus'];


var createPage = (boss) => {
  var url = '/boss/' + createValidUrl(boss.name);
  var content = boss.content;
  console.log(content);

  app.get (url, (req,res)=> {
    res.render('boss.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome to the website',
      boss,
      content,
      antorus,
      mplus,
      types
    });
  });
};

for(var i = 0; i < antorus.length; i++){
  antorus[i].url = createValidUrl(antorus[i].name);
  createPage(antorus[i]);
}

for(var i = 0; i < mplus.length; i++) {
  mplus[i].url = createValidUrl(mplus[i].name);
  createPage(mplus[i]);
}



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
