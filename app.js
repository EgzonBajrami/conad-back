var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products.routes')
const offertsRouter = require('./routes/offerts.routes')
const commentsRouter = require('./routes/comments.routes')
const applicationRouter = require('./routes/application.routes')

var app = express();
const cors = require('cors');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/offerts',offertsRouter);
app.use('/comments',commentsRouter);
app.use('/application',applicationRouter);

module.exports = app;
