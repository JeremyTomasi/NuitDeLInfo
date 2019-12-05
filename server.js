//inclusion des librairies du projet
const createError = require('http-errors');
const path = require('path');
const express = require('express');
const hjs = require('hjs');
const moment = require('moment');
moment.locale('fr');


//Architecture du projet
const home = require('./routes/home')


//Déclaration de l'app Express
const app = express()

//quelques réglages
app.use(express.static(path.join(__dirname, 'public')));

//Définition du moteur de rendu
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', "hjs")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',home)


//Gestion des erreurs
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error',err);
});


//Serveur
app.listen(8080)
console.log("Application connecté sur localhost:8080")
