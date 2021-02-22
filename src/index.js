const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.set('viw engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../', 'public')));

app.get('/', (req, res) => {
  throw new Error('Testing Error');
  res.send('<h1>Hello World</h1>');
});

app.use((req, res, next) => {
  const error = new Error('404 Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
    console.log(error);
  if (error.status === 404) {
    res.status(404);
    return res.render('errors/404.ejs');
  }
  res.status(500);
  res.render('errors/500.ejs');
});
app.listen(3000, () => {
  console.log('listening port on 3000');
});
