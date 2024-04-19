const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// use middleware check form.
app.use(express.urlencoded({
  extended: true,
}));

// XMLHttpRequest. fetch, axios
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
const hbs = handlebars.create({ extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Set pat url to view
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('auth/register');
});

app.post('/register', (req, res) => {
  console.log(req.body);
  return res.render('auth/register');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});